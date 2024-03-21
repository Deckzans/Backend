import { Router } from "express";
import { accionDocumentos } from "../service/index.js";
import { responsesUtiles } from "../utils/index.js";

const router = Router(); 

router.delete('/eliminarVacacion/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const vacacionEliminada = await accionDocumentos.eliminarVacacion(id)

        if (vacacionEliminada === null) {
            responsesUtiles.manejarEntidadNoEncontrada(res, id, 'Día');
        } else if (vacacionEliminada !== true) {
            responsesUtiles.OperacionExitosa(res, vacacionEliminada, 'Día eliminado exitosamente');
        }

    } catch (error) {
        responsesUtiles.manejarError(res, error, 'error al intentar eliminar la vacacion')
    }
})

router.delete('/eliminarPermiso/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const permisoEliminado = await accionDocumentos.eliminarPermiso(id)

        if (permisoEliminado === null) {
            responsesUtiles.manejarEntidadNoEncontrada(res, id, 'Permiso');
        } else if (permisoEliminado !== true) {
            responsesUtiles.OperacionExitosa(res, permisoEliminado, 'Día eliminado exitosamente');
        }

    } catch (error) {
        responsesUtiles.manejarError(res, error, 'error al intentar eliminar la Permiso')
    }
})

router.delete('/eliminarIncapacidad/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const incapacidadEliminada = await accionDocumentos.eliminarIncapacidad(id)

        if (incapacidadEliminada === null) {
            responsesUtiles.manejarEntidadNoEncontrada(res, id, 'Día');
        } else if (incapacidadEliminada !== true) {
            responsesUtiles.OperacionExitosa(res, incapacidadEliminada, 'Día eliminado exitosamente');
        }

    } catch (error) {
        responsesUtiles.manejarError(res, error, 'error al intentar eliminar la Incapacidad')
    }
})

router.delete('/eliminarFormacion/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const formacionEliminada = await accionDocumentos.eliminarFormacion(id)

        if (formacionEliminada === null) {
            responsesUtiles.manejarEntidadNoEncontrada(res, id, 'Día');
        } else if (formacionEliminada !== true) {
            responsesUtiles.OperacionExitosa(res, formacionEliminada, 'Día eliminado exitosamente');
        }

    } catch (error) {
        responsesUtiles.manejarError(res, error, 'error al intentar eliminar la Formacion')
    }
})

router.delete('/eliminarDia/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const diaEliminado = await accionDocumentos.eliminarDia(id);

        if (diaEliminado === null) {
            responsesUtiles.manejarEntidadNoEncontrada(res, id, 'Día');
        } else if (diaEliminado !== true) {
            responsesUtiles.OperacionExitosa(res, diaEliminado, 'Día eliminado exitosamente');
        }

    } catch (error) {
        responsesUtiles.manejarError(res, error, 'Error al intentar eliminar el Día');
    }
});

export default router;