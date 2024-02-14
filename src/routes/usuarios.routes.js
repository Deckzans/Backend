import { Router } from 'express';
import { usuarioServices } from '../service/index.js'
import { responsesUtiles } from '../utils/index.js'

const router = Router(); +

    router.get('/usuarios', (req, res) => {
        res.send('Hola desde usuariosRouter')
    })


//Ruta para agregar un usuario 
router.post('/agregar', async (req, res) => {
    try {
        const nuevoUsuario = await usuarioServices.crearUsuario(req.body)
        responsesUtiles.OperacionExitosa(res, nuevoUsuario)
    } catch (error) {
        responsesUtiles.manejarError(res, error, 'error al intentar agregar un nuevo usuario')
    }
})

//ruta para eliminar un usuario
router.delete('/eliminar/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const usuarioEliminado = await usuarioServices.eliminarUsuario(id)

        if (usuarioEliminado === null) {
            responsesUtiles.manejarEntidadNoEncontrada(res, id);
        } else if (usuarioEliminado !== true) {
            responsesUtiles.OperacionExitosa(res,usuarioEliminado,'Usuario eliminado exitosamente');
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
            responsesUtiles.OperacionExitosa(res,obtenerUsuarios)
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
            responsesUtiles.OperacionExitosa(res,obtenerUsuario,'Usuario obtenido exitosamente');
        } else {
            responsesUtiles.manejarError(res, 'Error al obtener el usuario');
        }

    } catch (error) {
        responsesUtiles.manejarError(res, error, `error al intentar obtener el usuario ${id} `)
    }
})


router.put('/editar/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const nuevosDatosUsuario = req.body;  // Asegúrate de que los nuevos datos estén presentes en el cuerpo de la solicitud

    try {
        const usuarioExistente = await usuarioServices.obtenerUsuario(id);

        if (usuarioExistente) {
            const usuarioEditado = await usuarioServices.editarUsuario(id, nuevosDatosUsuario);

            if (usuarioEditado === null) {
                responsesUtiles.manejarEntidadNoEncontrada(res, id);
            } else if (usuarioEditado !== true) {
                responsesUtiles.OperacionExitosa(res,usuarioEditado,'Usuario editado correctamente');
            } else {
                responsesUtiles.manejarError(res, 'Error al editar el usuario');
            }
        } 
    } catch (error) {
        console.error(`Error al intentar editar el usuario ${id}: ${error.message}`);
        responsesUtiles.manejarError(res, error, `error al intentar editar el usuario ${id} `)
    }
});




export default router;