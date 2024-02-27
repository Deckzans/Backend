import {empleadoModel} from '../models/empleadoModel.js';
import { crudService } from './index.js';


export const crearEmpleado = async (datosUsuario) => {
  return crudService.crearRegistro(empleadoModel, datosUsuario)
}

export const eliminarEmpleado = async (idUser) => {
  return crudService.eliminarRegistroPorId(empleadoModel, idUser)
}

export const obtenerEmpleados = async () => {
  try {
    const registros = await empleadoModel.findMany({
      include: {
        area: {
          select: {
            descripcion: true, // Incluir solo el campo 'id' del modelo 'Area'
          },
        },
        // Otras relaciones que desees incluir
      },
    });

    return registros;
  } catch (error) {
    console.error(`Error al intentar obtener todos los registros: ${error.message}`);
    return null;
  }
};

export const obtenerEmpleado = async (idUser) => {
  return crudService.obtenerRegistroPorId(empleadoModel, idUser)
}

export const editarEmpleado = async (idUser,datosNew) => { 
  return crudService.editarRegistroPorId(empleadoModel,idUser,datosNew)
} 