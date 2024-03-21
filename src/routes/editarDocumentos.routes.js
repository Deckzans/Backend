import { Router } from "express";
import { accionDocumentos } from "../service/index.js";
import { responsesUtiles } from "../utils/index.js";
import { uploadDia, uploadVacaciones,uploadPermiso,uploadIncapacidad,uploadFormacion } from "../multer/multer.js";

const router = Router(); 


router.put('/editarVacacion/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const nuevosDatos = req.body;

        // Verificar si la entidad existe antes de intentar editarla
        const entidadExistente = await accionDocumentos.obtenerVacacion(id);

        if (!entidadExistente) {
            return responsesUtiles.manejarEntidadNoEncontrada(res, id,'Vacacion');
        }

        // Intentar editar la entidad
        const registroEditado = await accionDocumentos.editarVacacion(id, nuevosDatos);

        // Verificar si la edición fue exitosa
        if (registroEditado !== true) {

            return responsesUtiles.OperacionExitosa(res, registroEditado, 'Vacación editada correctamente');
        }

        // Si llegamos aquí, la edición no fue exitosa
        return responsesUtiles.manejarError(res, 'Error al editar la vacación');
    } catch (error) {
        console.error(`Error al intentar editar la vacación ${id}: ${error.message}`);
        return responsesUtiles.manejarError(res, error, `Error al intentar editar el registro ${id}`);
    }
});


router.put('/editarFormacion/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const nuevosDatos = req.body;

        // Verificar si la entidad existe antes de intentar editarla
        const entidadExistente = await accionDocumentos.obtenerFormacion(id);

        if (!entidadExistente) {
            return responsesUtiles.manejarEntidadNoEncontrada(res, id,'Formacion');
        }

        // Intentar editar la entidad
        const registroEditado = await accionDocumentos.editarFormacion(id, nuevosDatos);

        // Verificar si la edición fue exitosa
        if (registroEditado !== true) {

            return responsesUtiles.OperacionExitosa(res, registroEditado, 'Registro editado correctamente');
        }

        // Si llegamos aquí, la edición no fue exitosa
        return responsesUtiles.manejarError(res, 'Error al editar el registro');
    } catch (error) {
        console.error(`Error al intentar editar el registro ${id}: ${error.message}`);
        return responsesUtiles.manejarError(res, error, `Error al intentar editar la vacación ${id}`);
    }
});


router.put('/editarDia/:id', async (req, res) => {
    
    try {
        const id = parseInt(req.params.id);
        const nuevosDatos = req.body;

        // Verificar si la entidad existe antes de intentar editarla
        const entidadExistente = await accionDocumentos.obtenerDia(id);

        if (!entidadExistente) {
            return responsesUtiles.manejarEntidadNoEncontrada(res, id,'Vacacion');
        }

        // Intentar editar la entidad
        const registroEditado = await accionDocumentos.editarDia(id, nuevosDatos);

        // Verificar si la edición fue exitosa
        if (registroEditado !== true) {

            return responsesUtiles.OperacionExitosa(res, registroEditado, 'Registro editado correctamente');
        }

        // Si llegamos aquí, la edición no fue exitosa
        return responsesUtiles.manejarError(res, 'Error al editar el registro');
    } catch (error) {
        console.error(`Error al intentar editar el registro ${id}: ${error.message}`);
        return responsesUtiles.manejarError(res, error, `Error al intentar editar la vacación ${id}`);
    }
});


router.put('/editarIncapacidad/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const nuevosDatos = req.body;

        // Verificar si la entidad existe antes de intentar editarla
        const entidadExistente = await accionDocumentos.obtenerIncapacidad(id);

        if (!entidadExistente) {
            return responsesUtiles.manejarEntidadNoEncontrada(res, id,'Vacacion');
        }

        // Intentar editar la entidad
        const registroEditado = await accionDocumentos.editarIncapacidad(id, nuevosDatos);

        // Verificar si la edición fue exitosa
        if (registroEditado !== true) {

            return responsesUtiles.OperacionExitosa(res, registroEditado, 'Registro editado correctamente');
        }

        // Si llegamos aquí, la edición no fue exitosa
        return responsesUtiles.manejarError(res, 'Error al editar el registro');
    } catch (error) {
        console.error(`Error al intentar editar el registro ${id}: ${error.message}`);
        return responsesUtiles.manejarError(res, error, `Error al intentar editar la vacación ${id}`);
    }
});


router.put('/editarPermiso/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const nuevosDatos = req.body;

        // Verificar si la entidad existe antes de intentar editarla
        const entidadExistente = await accionDocumentos.obtenerPermiso(id);

        if (!entidadExistente) {
            return responsesUtiles.manejarEntidadNoEncontrada(res, id,'Vacacion');
        }

        // Intentar editar la entidad
        const registroEditado = await accionDocumentos.editarPermiso(id, nuevosDatos);

        // Verificar si la edición fue exitosa
        if (registroEditado !== true) {

            return responsesUtiles.OperacionExitosa(res, registroEditado, 'Registro editado correctamente');
        }

        // Si llegamos aquí, la edición no fue exitosa
        return responsesUtiles.manejarError(res, 'Error al editar el registro');
    } catch (error) {
        console.error(`Error al intentar editar el registro ${id}: ${error.message}`);
        return responsesUtiles.manejarError(res, error, `Error al intentar editar la vacación ${id}`);
    }
});


router.post('/cargarNuevoArchivoVacacion', uploadVacaciones.single('nuevoArchivo'), async (req, res) => {
    try {
        // Verificar si se ha cargado un archivo
        if (!req.file) {
            return res.status(400).json({ error: 'No se ha proporcionado ningún archivo' });
        }
        const nombreArchivo = req.file.originalname;
        return res.status(200).json({ message: 'Archivo cargado exitosamente', filename: nombreArchivo, status:200});
    } catch (error) {
        console.error('Error al cargar el archivo:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
});

router.post('/cargarNuevoArchivoDia', uploadDia.single('nuevoArchivo'), async (req, res) => {
    try {
        // Verificar si se ha cargado un archivo
        if (!req.file) {
            return res.status(400).json({ error: 'No se ha proporcionado ningún archivo' });
        }
        const nombreArchivo = req.file.originalname;
        return res.status(200).json({ message: 'Archivo cargado exitosamente', filename: nombreArchivo, status:200});
    } catch (error) {
        console.error('Error al cargar el archivo:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
});

router.post('/cargarNuevoArchivoPermiso', uploadPermiso.single('nuevoArchivo'), async (req, res) => {
    try {
        // Verificar si se ha cargado un archivo
        if (!req.file) {
            return res.status(400).json({ error: 'No se ha proporcionado ningún archivo' });
        }
        const nombreArchivo = req.file.originalname;
        return res.status(200).json({ message: 'Archivo cargado exitosamente', filename: nombreArchivo, status:200});
    } catch (error) {
        console.error('Error al cargar el archivo:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
});

router.post('/cargarNuevoArchivoIncapacidad', uploadIncapacidad.single('nuevoArchivo'), async (req, res) => {
    try {
        // Verificar si se ha cargado un archivo
        if (!req.file) {
            return res.status(400).json({ error: 'No se ha proporcionado ningún archivo' });
        }
        const nombreArchivo = req.file.originalname;
        return res.status(200).json({ message: 'Archivo cargado exitosamente', filename: nombreArchivo, status:200});
    } catch (error) {
        console.error('Error al cargar el archivo:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
});


router.post('/cargarNuevoArchivoFormacion', uploadFormacion.single('nuevoArchivo'), async (req, res) => {
    try {
        // Verificar si se ha cargado un archivo
        if (!req.file) {
            return res.status(400).json({ error: 'No se ha proporcionado ningún archivo' });
        }
        const nombreArchivo = req.file.originalname;
        return res.status(200).json({ message: 'Archivo cargado exitosamente', filename: nombreArchivo, status:200});
    } catch (error) {
        console.error('Error al cargar el archivo:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
});





export default router;