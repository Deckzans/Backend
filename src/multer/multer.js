import multer from 'multer';
import path from 'path';

const imagenStorage = multer.diskStorage(
  {
  destination: 'uploads/img/',
  filename: (req, file, cb) => {
    const isValidExtension = ['.jpg', '.jpeg', '.png', '.gif'].includes(path.extname(file.originalname).toLowerCase());

    if (!isValidExtension) {
      return cb(new Error('Formato de archivo no válido. Solo se permiten archivos JPG, JPEG, PNG o GIF.'));
    } else {
      // Utilizamos la fecha actual y el nombre original del archivo para construir el nombre único.
      const fileName = `${file.originalname}`;

      cb(null, fileName);
    }
  },
  
});

const uploadImagen = multer({ storage: imagenStorage });

export { uploadImagen };
