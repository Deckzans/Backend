//Importacciones externos
import express from 'express';
import cors from 'cors'


//rutas de aplicacion 
import usuariosRoutes from './routes/usuarios.routes.js'
import empleadoRoutes from './routes/empleado.routes.js'
// import multer from 'multer';
// const upload = multer({ dest: 'uploads/' });

//creacion de la aplicacion de express
const app = express();

// app.post('/imagenes/single', uploadImagen.single('imagen'), (req, res) => {
//     // Verifica si la imagen se ha subido correctamente
//      console.log(req.body)
//     console.log(req.file)
//     res.send('termina')
//   });

//middlewares externos 
app.use(express.json());
app.use(cors());

//middlewares internos0
app.use('/usuario',usuariosRoutes)
app.use('/empleado',empleadoRoutes)

  
//configuracion de puerto 
app.listen(3000)
console.log('server on port',3000)