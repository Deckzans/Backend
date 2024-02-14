//Importacciones externos
import express from 'express'


//rutas de aplicacion 
import usuariosRoutes from './routes/usuarios.routes.js'

//creacion de la aplicacion de express
const app = express();

//middlewares externos 
app.use(express.json())

//middlewares internos0
app.use('/usuario',usuariosRoutes)

  
//configuracion de puerto 
app.listen(3000)
console.log('server on port',3000)