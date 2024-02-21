//Importacciones externos
import express from 'express'


//rutas de aplicacion 
import usuariosRoutes from './routes/usuarios.routes.js'
import empleadoRoutes from './routes/empleado.routes.js'

//creacion de la aplicacion de express
const app = express();

//middlewares externos 
app.use(express.json())

//middlewares internos0
app.use('/usuario',usuariosRoutes)
app.use('/empleado',empleadoRoutes)

  
//configuracion de puerto 
app.listen(3000)
console.log('server on port',3000)