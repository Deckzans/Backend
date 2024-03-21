import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const router = express.Router();

router.delete('/vacacion/:nombrearchivo', (req, res) => {
    try {
        const { nombrearchivo } = req.params;
        const nombreArchivoDecodificado = decodeURIComponent(nombrearchivo);
        // Obtener la ruta del directorio actual usando import.meta.url
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);

        const rutaArchivo = join(__dirname, '..', '..', 'uploads', 'vacaciones', nombreArchivoDecodificado);

        // Eliminar el archivo del sistema de archivos
        fs.unlink(rutaArchivo, (err) => {
            if (err) {
                console.error('Error al eliminar el archivo:', err);
                res.status(500).send({ mensaje: 'Archivo eliminado correctamente', status: 500 });
            } else {
                console.log('El archivo ha sido eliminado correctamente');
                res.status(200).send({ mensaje: 'Archivo eliminado correctamente', status: 200 });
            }
        });
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        res.status(500).send('Error interno del servidor');
    }
});


router.delete('/permiso/:nombrearchivo', (req, res) => {
    try {
        const { nombrearchivo } = req.params;
        const nombreArchivoDecodificado = decodeURIComponent(nombrearchivo);
        // Obtener la ruta del directorio actual usando import.meta.url
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);

        const rutaArchivo = join(__dirname, '..', '..', 'uploads', 'permiso', nombreArchivoDecodificado);

        // Eliminar el archivo del sistema de archivos
        fs.unlink(rutaArchivo, (err) => {
            if (err) {
                console.error('Error al eliminar el archivo:', err);
                res.status(500).send({ mensaje: 'Archivo eliminado correctamente', status: 500 });
            } else {
                console.log('El archivo ha sido eliminado correctamente');
                res.status(200).send({ mensaje: 'Archivo eliminado correctamente', status: 200 });
            }
        });
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        res.status(500).send('Error interno del servidor');
    }
});


router.delete('/incapacidad/:nombrearchivo', (req, res) => {
    try {
        const { nombrearchivo } = req.params;
        const nombreArchivoDecodificado = decodeURIComponent(nombrearchivo);
        // Obtener la ruta del directorio actual usando import.meta.url
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);

        const rutaArchivo = join(__dirname, '..', '..', 'uploads', 'incapacidad', nombreArchivoDecodificado);

        // Eliminar el archivo del sistema de archivos
        fs.unlink(rutaArchivo, (err) => {
            if (err) {
                console.error('Error al eliminar el archivo:', err);
                res.status(500).send({ mensaje: 'Archivo eliminado correctamente', status: 500 });
            } else {
                console.log('El archivo ha sido eliminado correctamente');
                res.status(200).send({ mensaje: 'Archivo eliminado correctamente', status: 200 });
            }
        });
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        res.status(500).send('Error interno del servidor');
    }
});

router.delete('/dia/:nombrearchivo', (req, res) => {
    try {
        const { nombrearchivo } = req.params;
        const nombreArchivoDecodificado = decodeURIComponent(nombrearchivo);
        // Obtener la ruta del directorio actual usando import.meta.url
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);

        const rutaArchivo = join(__dirname, '..', '..', 'uploads', 'dia', nombreArchivoDecodificado);

        // Eliminar el archivo del sistema de archivos
        fs.unlink(rutaArchivo, (err) => {
            if (err) {
                console.error('Error al eliminar el archivo:', err);
                res.status(500).send({ mensaje: 'Archivo eliminado correctamente', status: 500 });
            } else {
                console.log('El archivo ha sido eliminado correctamente');
                res.status(200).send({ mensaje: 'Archivo eliminado correctamente', status: 200 });
            }
        });
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        res.status(500).send('Error interno del servidor');
    }
});

router.delete('/formacion/:nombrearchivo', (req, res) => {
    try {
        const { nombrearchivo } = req.params;
        const nombreArchivoDecodificado = decodeURIComponent(nombrearchivo);
        // Obtener la ruta del directorio actual usando import.meta.url
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);

        const rutaArchivo = join(__dirname, '..', '..', 'uploads', 'fomracion', nombreArchivoDecodificado);

        // Eliminar el archivo del sistema de archivos
        fs.unlink(rutaArchivo, (err) => {
            if (err) {
                console.error('Error al eliminar el archivo:', err);
                res.status(500).send({ mensaje: 'Archivo eliminado correctamente', status: 500 });
            } else {
                console.log('El archivo ha sido eliminado correctamente');
                res.status(200).send({ mensaje: 'Archivo eliminado correctamente', status: 200 });
            }
        });
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        res.status(500).send('Error interno del servidor');
    }
});

router.delete('/vacacion/:nombrearchivo', (req, res) => {
    try {
        const { nombrearchivo } = req.params;
        const nombreArchivoDecodificado = decodeURIComponent(nombrearchivo);
        // Obtener la ruta del directorio actual usando import.meta.url
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);

        const rutaArchivo = join(__dirname, '..', '..', 'uploads', 'vacaciones', nombreArchivoDecodificado);

        // Eliminar el archivo del sistema de archivos
        fs.unlink(rutaArchivo, (err) => {
            if (err) {
                console.error('Error al eliminar el archivo:', err);
                res.status(500).send({ mensaje: 'Archivo eliminado correctamente', status: 500 });
            } else {
                console.log('El archivo ha sido eliminado correctamente');
                res.status(200).send({ mensaje: 'Archivo eliminado correctamente', status: 200 });
            }
        });
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        res.status(500).send('Error interno del servidor');
    }
});

router.delete('/permiso/:nombrearchivo', (req, res) => {
    try {
        const { nombrearchivo } = req.params;
        const nombreArchivoDecodificado = decodeURIComponent(nombrearchivo);
        // Obtener la ruta del directorio actual usando import.meta.url
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);

        const rutaArchivo = join(__dirname, '..', '..', 'uploads', 'permiso', nombreArchivoDecodificado);

        // Eliminar el archivo del sistema de archivos
        fs.unlink(rutaArchivo, (err) => {
            if (err) {
                console.error('Error al eliminar el archivo:', err);
                res.status(500).send({ mensaje: 'Archivo eliminado correctamente', status: 500 });
            } else {
                console.log('El archivo ha sido eliminado correctamente');
                res.status(200).send({ mensaje: 'Archivo eliminado correctamente', status: 200 });
            }
        });
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        res.status(500).send('Error interno del servidor');
    }
});

router.delete('/incapacidad/:nombrearchivo', (req, res) => {
    try {
        const { nombrearchivo } = req.params;
        const nombreArchivoDecodificado = decodeURIComponent(nombrearchivo);
        // Obtener la ruta del directorio actual usando import.meta.url
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);

        const rutaArchivo = join(__dirname, '..', '..', 'uploads', 'incapacidad', nombreArchivoDecodificado);

        // Eliminar el archivo del sistema de archivos
        fs.unlink(rutaArchivo, (err) => {
            if (err) {
                console.error('Error al eliminar el archivo:', err);
                res.status(500).send({ mensaje: 'Archivo eliminado correctamente', status: 500 });
            } else {
                console.log('El archivo ha sido eliminado correctamente');
                res.status(200).send({ mensaje: 'Archivo eliminado correctamente', status: 200 });
            }
        });
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        res.status(500).send('Error interno del servidor');
    }
});

router.delete('/dia/:nombrearchivo', (req, res) => {
    try {
        const { nombrearchivo } = req.params;
        const nombreArchivoDecodificado = decodeURIComponent(nombrearchivo);
        // Obtener la ruta del directorio actual usando import.meta.url
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);

        const rutaArchivo = join(__dirname, '..', '..', 'uploads', 'dia', nombreArchivoDecodificado);

        // Eliminar el archivo del sistema de archivos
        fs.unlink(rutaArchivo, (err) => {
            if (err) {
                console.error('Error al eliminar el archivo:', err);
                res.status(500).send({ mensaje: 'Archivo eliminado correctamente', status: 500 });
            } else {
                console.log('El archivo ha sido eliminado correctamente');
                res.status(200).send({ mensaje: 'Archivo eliminado correctamente', status: 200 });
            }
        });
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        res.status(500).send('Error interno del servidor');
    }
});




export default router;