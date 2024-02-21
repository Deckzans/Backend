/* Importacion de prisma */
import {prisma} from '../db/db.js';


/* Creacion de una constante y exportamos todo el modelo de emplleado
    Esto nos permite realizar el crud mediante el ORM Prisma
*/
export const empleadoModel = prisma.empleado;

