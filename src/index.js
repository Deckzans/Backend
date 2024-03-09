//Importacciones externos
import express from 'express';
import cors from 'cors'


//rutas de aplicacion 
import usuariosRoutes from './routes/usuarios.routes.js'
import empleadoRoutes from './routes/empleado.routes.js'
import accionesRoutes from './routes/accionEmpleado.routes.js'
import descargarRoutes from './routes/descargas.routes.js'


//creacion de la aplicacion de express
const app = express();


//middlewares externos 
app.use(express.json());
app.use(cors());

//middlewares internos0
app.use('/usuario',usuariosRoutes)
app.use('/empleado',empleadoRoutes)
app.use('/accion',accionesRoutes)
app.use('/descargar',descargarRoutes)

  
//configuracion de puerto 
app.listen(3000)
console.log('server on port',3000)