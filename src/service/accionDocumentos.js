import {crudService} from './index.js';
import {vacacionesModel,diaModel,incapacidadesModel,permisoModel, formacionModel} from '../models/accionEmpleadoModels.js'; 

export const obtenerVacacion = async (id) => {
    return crudService.obtenerRegistroPorId(vacacionesModel, id)
  }

  export const obtenerDia = async (id) => {
    return crudService.obtenerRegistroPorId(diaModel, id)
  }

  export const obtenerPermiso = async (id) => {
    return crudService.obtenerRegistroPorId(permisoModel, id)
  }

  export const obtenerFormacion = async (id) => {
    return crudService.obtenerRegistroPorId(formacionModel, id)
  }

  export const obtenerIncapacidad = async (id) => {
    return crudService.obtenerRegistroPorId(incapacidadesModel, id)
  }



  

  export const editarVacacion = async (id,datosNew) => { 
    return crudService.editarRegistroPorId(vacacionesModel,id,datosNew)
  } 

  export const editarPermiso = async (id,datosNew) => { 
    return crudService.editarRegistroPorId(permisoModel,id,datosNew)
  } 

  export const editarFormacion = async (id,datosNew) => { 
    return crudService.editarRegistroPorId(formacionModel,id,datosNew)
  } 

  export const editarIncapacidad = async (id,datosNew) => { 
    return crudService.editarRegistroPorId(incapacidadesModel,id,datosNew)
  } 

  export const editarDia = async (id,datosNew) => { 
    return crudService.editarRegistroPorId(diaModel,id,datosNew)
  } 



  export const eliminarVacacion = async (id) => {
    return crudService.eliminarRegistroPorId(vacacionesModel, id)
  }

  export const eliminarPermiso = async (id) => {
    return crudService.eliminarRegistroPorId(permisoModel, id)
  }
  
  export const eliminarFormacion = async (id) => {
    return crudService.eliminarRegistroPorId(formacionModel, id)
  }

  export const eliminarIncapacidad = async (id) => {
    return crudService.eliminarRegistroPorId(incapacidadesModel, id)
  }
  
  export const eliminarDia = async (id) => {
    return crudService.eliminarRegistroPorId(diaModel, id)
  }