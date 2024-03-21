import { Router } from "express";
import { accionDocumentos } from "../service/index.js";
import { responsesUtiles } from "../utils/index.js";

const router = Router(); 

router.get('/obtenerVacacion/:id', async (req, res) => {

    const id = parseInt(req.params.id)

    try {
        const obtenerRegistro = await accionDocumentos.obtenerVacacion(id)

        if (obtenerRegistro === null) {
            responsesUtiles.manejarEntidadNoEncontrada(res, id);
        } else if (obtenerRegistro !== true) {
            responsesUtiles.OperacionExitosa(res, obtenerRegistro, 'Registro obtenido exitosamente');
        } else {
            responsesUtiles.manejarError(res, 'Error al obtener el Registro');
        }

    } catch (error) {
        responsesUtiles.manejarError(res, error, `error al intentar obtener el Registro ${id} `)
    }
})

router.get('/obtenerPermiso/:id', async (req, res) => {

    const id = parseInt(req.params.id)

    try {
        const obtenerRegistro = await accionDocumentos.obtenerPermiso(id)

        if (obtenerRegistro === null) {
            responsesUtiles.manejarEntidadNoEncontrada(res, id);
        } else if (obtenerRegistro !== true) {
            responsesUtiles.OperacionExitosa(res, obtenerRegistro, 'Registro obtenido exitosamente');
        } else {
            responsesUtiles.manejarError(res, 'Error al obtener el Registro');
        }

    } catch (error) {
        responsesUtiles.manejarError(res, error, `error al intentar obtener el Registro ${id} `)
    }
})


router.get('/obtenerIncapacidad/:id', async (req, res) => {

    const id = parseInt(req.params.id)

    try {
        const obtenerRegistro = await accionDocumentos.obtenerIncapacidad(id)

        if (obtenerRegistro === null) {
            responsesUtiles.manejarEntidadNoEncontrada(res, id);
        } else if (obtenerRegistro !== true) {
            responsesUtiles.OperacionExitosa(res, obtenerRegistro, 'Registro obtenido exitosamente');
        } else {
            responsesUtiles.manejarError(res, 'Error al obtener el Registro');
        }

    } catch (error) {
        responsesUtiles.manejarError(res, error, `error al intentar obtener el Registro ${id} `)
    }
})


router.get('/obtenerFormacion/:id', async (req, res) => {

    const id = parseInt(req.params.id)

    try {
        const obtenerRegistro = await accionDocumentos.obtenerFormacion(id)

        if (obtenerRegistro === null) {
            responsesUtiles.manejarEntidadNoEncontrada(res, id);
        } else if (obtenerRegistro !== true) {
            responsesUtiles.OperacionExitosa(res, obtenerRegistro, 'Registro obtenido exitosamente');
        } else {
            responsesUtiles.manejarError(res, 'Error al obtener el Registro');
        }

    } catch (error) {
        responsesUtiles.manejarError(res, error, `error al intentar obtener el Registro ${id} `)
    }
})


router.get('/obtenerDia/:id', async (req, res) => {

    
    try {
        const id = parseInt(req.params.id)
        const obtenerRegistro = await accionDocumentos.obtenerDia(id)

        if (obtenerRegistro === null) {
            responsesUtiles.manejarEntidadNoEncontrada(res, id);
        } else if (obtenerRegistro !== true) {
            responsesUtiles.OperacionExitosa(res, obtenerRegistro, 'Registro obtenido exitosamente');
        } else {
            responsesUtiles.manejarError(res, 'Error al obtener el Registro');
        }

    } catch (error) {
        responsesUtiles.manejarError(res, error, `error al intentar obtener el Registro ${id} `)
    }
})


export default router;