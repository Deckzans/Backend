import { Router, json } from 'express';
import { usuarioServices } from '../service/index.js'
import { responsesUtiles } from '../utils/index.js'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = Router(); 

    router.get('/', (req, res) => {
        res.send('Hola desde usuariosRouter')
    })


//Ruta para agregar un usuario 
router.post('/agregar', async (req, res) => {
    // console.log(req.body)
    try {
        const nuevoUsuario = await usuarioServices.crearUsuario(req.body)
        console.log(nuevoUsuario)
        //devolucion de respuesta
        const respuesta =
            nuevoUsuario === 'clave_unica'
                ? responsesUtiles.manejarError(res, 'Nombre de usuario duplicado', "el usuario esta duplicado",409)
                : nuevoUsuario
                    ? responsesUtiles.OperacionExitosa(res, nuevoUsuario, 'Usuario agregado exitosamente')
                    : responsesUtiles.manejarError(res, 'Error al agregar el usuario');
        return respuesta;
        //fin de devoluccion de respuesta
    } catch (error) {
        responsesUtiles.manejarError(res, error, 'error al intentar agregar un nuevo usuario')
    }
})

//ruta para eliminar un usuario
router.delete('/eliminar/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const usuarioEliminado = await usuarioServices.eliminarUsuario(id)

        if (usuarioEliminado === null) {
            responsesUtiles.manejarEntidadNoEncontrada(res, id);
        } else if (usuarioEliminado !== true) {
            responsesUtiles.OperacionExitosa(res, usuarioEliminado, 'Usuario eliminado exitosamente');
        } else {
            responsesUtiles.manejarError(res, 'Error al eliminar el usuario');
        }

    } catch (error) {
        responsesUtiles.manejarError(res, error, 'error al intentar eliminar un usuario')
    }
})

router.get('/obtenerTodo', async (req, res) => {

    try {
        const obtenerUsuarios = await usuarioServices.obtenerUsuarios()
        responsesUtiles.OperacionExitosa(res, obtenerUsuarios)
    } catch (error) {
        responsesUtiles.manejarError(res, error, 'error al intentar obtener todos los usuarios')
    }
})

router.get('/obtener/:id', async (req, res) => {

    const id = parseInt(req.params.id)

    try {
        const obtenerUsuario = await usuarioServices.obtenerUsuario(id)

        if (obtenerUsuario === null) {
            responsesUtiles.manejarEntidadNoEncontrada(res, id);
        } else if (obtenerUsuario !== true) {
            responsesUtiles.OperacionExitosa(res, obtenerUsuario, 'Usuario obtenido exitosamente');
        } else {
            responsesUtiles.manejarError(res, 'Error al obtener el usuario');
        }

    } catch (error) {
        responsesUtiles.manejarError(res, error, `error al intentar obtener el usuario ${id} `)
    }
})


router.put('/editar/:id', async (req, res) => {
    
    try {
        const id = parseInt(req.params.id);
        const nuevosDatosUsuario = req.body; 

        const usuarioExistente = await usuarioServices.obtenerUsuario(id);

        if (usuarioExistente) {
            const usuarioEditado = await usuarioServices.editarUsuario(id, nuevosDatosUsuario);

            if (usuarioEditado === null) {
                responsesUtiles.manejarEntidadNoEncontrada(res, id);
            } else if (usuarioEditado !== true) {
                responsesUtiles.OperacionExitosa(res, usuarioEditado, 'Usuario editado correctamente');
            } else {
                responsesUtiles.manejarError(res, 'Error al editar el usuario');
            }
        }
    } catch (error) {
        console.error(`Error al intentar editar el usuario ${id}: ${error.message}`);
        responsesUtiles.manejarError(res, error, `error al intentar editar el usuario ${id} `)
    }
});


router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const usuario = await usuarioServices.obtenerUsuarioPorNombre(username);

        if (usuario) {
            // Comparar la contraseña ingresada con la contraseña hasheada almacenada
            
            const match = await bcrypt.compare(password, usuario.password);

            if (match) {
                // Generar el token JWT si las contraseñas coinciden
                const token = jwt.sign({
                    usuarioId: usuario.id,
                    usuario: usuario.usuario,
                    rol: usuario.rol,
                }, "pachanga la changa", { expiresIn: '1h' });

                res.status(200).json({
                    success: true,
                    mensaje: 'Inicio de sesión exitoso',
                    data: {
                        token,
                        usuario: usuario.usuario,
                        rol: usuario.rol,
                        id: usuario.id
                    },
                });
            } else {
                // Enviar una respuesta 401 (Unauthorized) cuando las contraseñas no coinciden
                res.status(401).json({
                    success: false,
                    mensaje: 'Nombre de usuario o contraseña incorrectos',
                    error: null,
                });
            }
        } else {
            // Enviar una respuesta 401 (Unauthorized) cuando no se encuentra el usuario
            res.status(401).json({
                success: false,
                mensaje: 'Nombre de usuario o contraseña incorrectos',
                error: null,
            });
        }
    } catch (error) {
        console.error(`Error al intentar iniciar sesión: ${error.message}`);
        // Manejar otros errores y enviar una respuesta 500 (Internal Server Error)
        res.status(500).json({
            success: false,
            mensaje: 'Error al intentar iniciar sesión',
            error: error.message || error,
        });
    }
});

// Ruta para verificar token
router.post('/verificar-token', (req, res) => {
    const { token } = req.body;
  
    if (!token) {
      return res.status(400).json({
        success: false,
        mensaje: 'Token no proporcionado en el cuerpo de la solicitud',
        error: null,
      });
    }
  
    try {
      // Verificar el token con la misma clave secreta utilizada para firmar el token
      jwt.verify(token, 'pachanga la changa');
  
      res.status(200).json({
        success: true,
        mensaje: 'Token válido',
      });
    } catch (error) {
      console.error(`Error al verificar el token: ${error.message}`);
      return res.status(401).json({
        success: false,
        mensaje: 'Token no válido',
        error: error.message,
      });
    }
  });



export default router;