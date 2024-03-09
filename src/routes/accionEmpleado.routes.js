import { Router } from 'express';
import { accionEmpleado } from "../service/index.js";
import { responsesUtiles } from "../utils/index.js";
import { uploadDia, uploadFormacion, uploadIncapacidad, uploadPermiso, uploadVacaciones } from '../multer/multer.js';

const router = Router();

router.post('/agregarVacaciones', uploadVacaciones.single('archivo'), async (req, res) => {
    // console.log(req.body)
    // console.log(req.file)

    try {
        const convertirANumerico = (valor) => parseInt(valor) || 0;
    
        const datosVacaciones = {
            ...req.body,
            empleadoId : convertirANumerico(req.body.empleadoId),
        };

        const nuevaVacacion = await accionEmpleado.crearVacacion(datosVacaciones);
        if (nuevaVacacion) {
            // Operación exitosa
            return responsesUtiles.OperacionExitosa(res, nuevaVacacion, 'Vacación creada exitosamente');
        } else {
            // Error al agregar la vacación
            return responsesUtiles.manejarError(res, 'Error al crear la vacación');
        }
    } catch (error) {
        responsesUtiles.manejarError(res, error, 'Error al intentar crear una nueva vacación');
    }


});

router.post('/agregarPermiso',uploadPermiso.single('archivo'), async (req, res) => {

    try {
        const convertirANumerico = (valor) => parseInt(valor) || 0;
    
        const datosPermiso = {
            ...req.body,
            empleadoId: convertirANumerico(req.body.empleadoId),
        };
        const nuevoPermiso = await accionEmpleado.crearPermiso(datosPermiso);
        if (nuevoPermiso) {
            // Operación exitosa
            return responsesUtiles.OperacionExitosa(res, nuevoPermiso, 'permiso creado exitosamente');
        } else {
            // Error al agregar la vacación
            return responsesUtiles.manejarError(res, 'Error al crear el permiso');
        }
    } catch (error) {
        responsesUtiles.manejarError(res, error, 'Error al intentar crear un nuevo permiso');
    }
});


router.post('/agregarIncapacidad',uploadIncapacidad.single('archivo'), async (req, res) => {
    // console.log(req.body)
    // console.log(req.file)
    try {
        const convertirANumerico = (valor) => parseInt(valor) || 0;
    
        const datosIncapacidad = {
            ...req.body,
            empleadoId: convertirANumerico(req.body.empleadoId),
            diasIncapacitado: convertirANumerico(req.body.diasIncapacitado),
        };
        const nuevaIncapacidad = await accionEmpleado.crearIncapacidad(datosIncapacidad);
        if (nuevaIncapacidad) {
            // Operación exitosa
            return responsesUtiles.OperacionExitosa(res, nuevaIncapacidad, 'Incapacidad creada exitosamente');
        } else {
            // Error al agregar la vacación
            return responsesUtiles.manejarError(res, 'Error al crear Incapacidad');
        }
    } catch (error) {
        responsesUtiles.manejarError(res, error, 'Error al intentar crear una incapacidad');
    }
});


router.post('/agregarDia',uploadDia.single('archivo'), async (req, res) => {

    // console.log(req.body)
    // console.log(req.file)

    const convertirANumerico = (valor) => parseInt(valor) || 0;
    
    const datosDia = {
        ...req.body,
        empleadoId: convertirANumerico(req.body.empleadoId),
        fechaDiasRestantes: convertirANumerico(req.body.fechaDiasRestantes),
        diasTotales: convertirANumerico(req.body.diasTotales),
    };

    try {
        const nuevoDia = await accionEmpleado.crearDia(datosDia);
        if (nuevoDia) {
            // Operación exitosa
            return responsesUtiles.OperacionExitosa(res, nuevoDia, 'dia creado exitosamente');
        } else {
            // Error al agregar la vacación
            return responsesUtiles.manejarError(res, 'Error al crear dia');
        }
    } catch (error) {
        responsesUtiles.manejarError(res, error, 'Error al intentar crear dia');
    }
});

router.post('/agregarFormacion',uploadFormacion.single('archivo'), async (req, res) => {

    // console.log(req.body)
    // console.log(req.file)

    const convertirANumerico = (valor) => parseInt(valor) || 0;
    
    const datosFormacion = {
        ...req.body,
        empleadoId: convertirANumerico(req.body.empleadoId),
    };

    try {
        const nuevaFormacion = await accionEmpleado.crearFormacion(datosFormacion);
        if (nuevaFormacion) {
            // Operación exitosa
            return responsesUtiles.OperacionExitosa(res, nuevaFormacion, 'Formacion creada exitosamente');
        } else {
            // Error al agregar la vacación
            return responsesUtiles.manejarError(res, 'Error al crear Formacion');
        }
    } catch (error) {
        responsesUtiles.manejarError(res, error, 'Error al intentar crear Formacion');
    }
});


router.get('/obtenerVacaciones/:id', async (req, res) => {
    try {
        // Obtén el parámetro 'id' de la URL
        const empleadoId = parseInt(req.params.id) 

        const obtenerVacaciones = await accionEmpleado.obtenerVacaciones(empleadoId);
        responsesUtiles.OperacionExitosa(res, obtenerVacaciones);
    } catch (error) {
        responsesUtiles.manejarError(res, error, 'Error al intentar obtener todas las vacaciones');
    }
});

router.get('/obtenerPermisos/:id', async (req, res) => {
     // Obtén el parámetro 'id' de la URL
        const empleadoId = parseInt(req.params.id) 
    try {
        const obtenerPermisos = await accionEmpleado.obtenerPermiso(empleadoId);
        responsesUtiles.OperacionExitosa(res, obtenerPermisos);
    } catch (error) {
        responsesUtiles.manejarError(res, error, 'Error al intentar obtener todas las vacaciones');
    }
});


router.get('/obtenerIncapacidad/:id', async (req, res) => {
     // Obtén el parámetro 'id' de la URL
        const empleadoId = parseInt(req.params.id) 
    try {
        const obtenerIncapacidad2 = await accionEmpleado.obtenerIncapacidad(empleadoId);
        responsesUtiles.OperacionExitosa(res, obtenerIncapacidad2);
    } catch (error) {
        responsesUtiles.manejarError(res, error, 'Error al intentar obtener todas las vacaciones');
    }
});


router.get('/obtenerDia/:id', async (req, res) => {
     // Obtén el parámetro 'id' de la URL
        const empleadoId = parseInt(req.params.id) 
    try {
        const obtenerDia = await accionEmpleado.obtenerDia(empleadoId);
        responsesUtiles.OperacionExitosa(res, obtenerDia);
    } catch (error) {
        responsesUtiles.manejarError(res, error, 'Error al intentar obtener todas los dias economicos');
    }
});


router.get('/obtenerFormacion/:id', async (req, res) => {
     // Obtén el parámetro 'id' de la URL
        const empleadoId = parseInt(req.params.id) 
    try {
        const obtenerFormacion = await accionEmpleado.obtenerFormacion(empleadoId);
        responsesUtiles.OperacionExitosa(res, obtenerFormacion);
    } catch (error) {
        responsesUtiles.manejarError(res, error, 'Error al intentar obtener la formacion del empleado');
    }
});



export default router;

