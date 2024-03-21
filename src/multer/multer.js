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

const pdfVacaciones = multer.diskStorage(
  {
  destination: 'uploads/vacaciones/',
  filename: (req, file, cb) => {
    const isValidExtension = ['.pdf'].includes(path.extname(file.originalname).toLowerCase());

    if (!isValidExtension) {
      return cb(new Error('Formato de archivo no válido. Solo se permiten PDF.'));
    } else {
      // Utilizamos la fecha actual y el nombre original del archivo para construir el nombre único.
      const fileName = `${file.originalname}`;

      cb(null, fileName);
    }
  },
});

const pdfPermisos = multer.diskStorage(
  {
  destination: 'uploads/permiso/',
  filename: (req, file, cb) => {
    const isValidExtension = ['.pdf'].includes(path.extname(file.originalname).toLowerCase());

    if (!isValidExtension) {
      return cb(new Error('Formato de archivo no válido. Solo se permiten PDF.'));
    } else {
      // Utilizamos la fecha actual y el nombre original del archivo para construir el nombre único.
      const fileName = `${file.originalname}`;

      cb(null, fileName);
    }
  },
});

const pdfIncapacidades = multer.diskStorage(
  {
  destination: 'uploads/incapacidad/',
  filename: (req, file, cb) => {
    const isValidExtension = ['.pdf'].includes(path.extname(file.originalname).toLowerCase());

    if (!isValidExtension) {
      return cb(new Error('Formato de archivo no válido. Solo se permiten PDF.'));
    } else {
      // Utilizamos la fecha actual y el nombre original del archivo para construir el nombre único.
      const fileName = `${file.originalname}`;

      cb(null, fileName);
    }
  },
});


const pdfDia = multer.diskStorage(
  {
  destination: 'uploads/dia/',
  filename: (req, file, cb) => {
    const isValidExtension = ['.pdf'].includes(path.extname(file.originalname).toLowerCase());

    if (!isValidExtension) {
      return cb(new Error('Formato de archivo no válido. Solo se permiten PDF.'));
    } else {
      // Utilizamos la fecha actual y el nombre original del archivo para construir el nombre único.
      const fileName = `${file.originalname}`;

      cb(null, fileName);
    }
  },
});

const pdfFormacion = multer.diskStorage(
  {
  destination: 'uploads/fomracion/',
  filename: (req, file, cb) => {
    const isValidExtension = ['.pdf'].includes(path.extname(file.originalname).toLowerCase());

    if (!isValidExtension) {
      return cb(new Error('Formato de archivo no válido. Solo se permiten PDF.'));
    } else {
      // Utilizamos la fecha actual y el nombre original del archivo para construir el nombre único.
      const fileName = `${file.originalname}`;

      cb(null, fileName);
    }
  },
});


const uploadImagen = multer({ storage: imagenStorage });
const uploadVacaciones = multer({ storage: pdfVacaciones });
const uploadPermiso = multer({ storage: pdfPermisos });
const uploadIncapacidad = multer({ storage: pdfIncapacidades });
const uploadDia = multer({ storage: pdfDia });
const uploadFormacion = multer({ storage: pdfFormacion });

export { uploadImagen };
export { uploadVacaciones };
export { uploadPermiso };
export { uploadIncapacidad };
export { uploadDia };
export { uploadFormacion };

