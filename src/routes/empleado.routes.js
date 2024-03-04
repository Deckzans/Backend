import { Router } from 'express';
import { EmpleadoService } from '../service/index.js'
import { responsesUtiles } from '../utils/index.js'
import { uploadImagen } from '../multer/multer.js';

const router = Router(); +

    router.get('/', (req, res) => {
        res.send('Hola desde empleados Router')
    })

    router.post('/agregar', uploadImagen.single('imagenEmpleado2'), async (req, res) => {
        const {
            aPaterno,
            aMaterno,
            nombre,
            regimen,
            observaciones,
            cargo,
            usuarioId,
            status,
            sexo,
            sueldoBruto,
            sueldoNeto,
            fechaNacimiento,
            fechaIngreso,
            llave,
            imagenEmpleado,
            escolaridadId,
            estadocivilid,
            areaId
        } = req.body
        
        const datosEmpleado =  {
            aPaterno: aPaterno,
            aMaterno: aMaterno,
            nombre: nombre,
            regimen: regimen,
            observaciones: observaciones,
            cargo: cargo,
            usuarioId: parseInt(usuarioId, 10),
            status:status,
            sexo:sexo,
            sueldoBruto:parseFloat(sueldoBruto),
            sueldoNeto:parseFloat(sueldoNeto),
            fechaNacimiento:fechaNacimiento,
            fechaIngreso:fechaIngreso,
            llave:parseFloat(llave),
            imagenEmpleado:imagenEmpleado,
            escolaridadId:parseInt(escolaridadId, 10),
            estadocivilid:parseInt(estadocivilid, 10),
            areaId:parseInt(areaId,10)
        }

        try {
            const nuevoEmpleado = await EmpleadoService.crearEmpleado(datosEmpleado)
            console.log(nuevoEmpleado)
            //devolucion de respuesta
            const respuesta =
                nuevoEmpleado === 'clave_unica'
                    ? responsesUtiles.manejarError(res, 'Dato duplicado')
                    : nuevoEmpleado
                        ? responsesUtiles.OperacionExitosa(res, nuevoEmpleado, 'Empleado agregado exitosamente')
                        : responsesUtiles.manejarError(res, 'Error al agregar un Empleado');
                    return respuesta;
            //fin de devoluccion de respuesta
        } catch (error) {
            responsesUtiles.manejarError(res, error, 'error al intentar agregar un nuevo Empleado')
        }
    


        console.log('Antes de Multer:', datosEmpleado);
        console.log('Después de Multer:', req.file);
      });
         
        
//ruta para eliminar un usuario
router.delete('/eliminar/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const empleadoEliminado = await EmpleadoService.eliminarEmpleado(id)

        if (empleadoEliminado === null) {
            responsesUtiles.manejarEntidadNoEncontrada(res, id);
        } else if (empleadoEliminado !== true) {
            responsesUtiles.OperacionExitosa(res, empleadoEliminado, 'Empleado eliminado exitosamente');
        } else {
            responsesUtiles.manejarError(res, 'Error al eliminar el Empleado');
        }

    } catch (error) {
        responsesUtiles.manejarError(res, error, 'error al intentar eliminar un Empleado')
    }
})

router.get('/obtenerTodo', async (req, res) => {

    try {
        const obtenerEmpleados = await EmpleadoService.obtenerEmpleados()
        responsesUtiles.OperacionExitosa(res, obtenerEmpleados)
    } catch (error) {
        responsesUtiles.manejarError(res, error, 'error al intentar obtener todos los usuarios')
    }
})

router.get('/obtener/:id', async (req, res) => {

    const id = parseInt(req.params.id)

    try {
        const obtenerEmpleado = await EmpleadoService.obtenerEmpleado(id)

        if (obtenerEmpleado === null) {
            responsesUtiles.manejarEntidadNoEncontrada(res, id);
        } else if (obtenerEmpleado !== true) {
            responsesUtiles.OperacionExitosa(res, obtenerEmpleado, 'Usuario obtenido exitosamente');
        } else {
            responsesUtiles.manejarError(res, 'Error al obtener el usuario');
        }

    } catch (error) {
        responsesUtiles.manejarError(res, error, `error al intentar obtener el usuario ${id} `)
    }
})


router.put('/editar/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const nuevosDatosEmpleados = req.body;  // Asegúrate de que los nuevos datos estén presentes en el cuerpo de la solicitud

    try {
        const empleadoExistente = await EmpleadoService.obtenerEmpleado(id);

        if (empleadoExistente) {
            const empleadoEditado = await EmpleadoService.editarEmpleado(id, nuevosDatosEmpleados);

            if (empleadoEditado === null) {
                responsesUtiles.manejarEntidadNoEncontrada(res, id);
            } else if (empleadoEditado !== true) {
                responsesUtiles.OperacionExitosa(res, empleadoEditado, 'Usuario editado correctamente');
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