import {empleadoModel} from '../models/empleadoModel.js';
import { crudService } from './index.js';


export const crearEmpleado = async (datosUsuario) => {
  return crudService.crearRegistro(empleadoModel, datosUsuario)
}

export const eliminarEmpleado = async (idUser) => {
  return crudService.eliminarRegistroPorId(empleadoModel, idUser)
}

export const obtenerEmpleados = async () => {
  return crudService.obtenerTodosLosRegistros(empleadoModel)
}

export const obtenerEmpleado = async (idUser) => {
  return crudService.obtenerRegistroPorId(empleadoModel, idUser)
}

export const editarEmpleado = async (idUser,datosNew) => { 
  return crudService.editarRegistroPorId(empleadoModel,idUser,datosNew)
} 