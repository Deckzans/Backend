import {crudService} from './index.js';
import {vacacionesModel,diaModel,incapacidadesModel,permisoModel, formacionModel} from '../models/accionEmpleadoModels.js'; 

export const crearVacacion = async (datosVacaciones) => {
    return crudService.crearRegistro(vacacionesModel, datosVacaciones)
  }

export const crearPermiso = async (datosPermiso) => {
    return crudService.crearRegistro(permisoModel, datosPermiso)
  }

export const crearIncapacidad = async (datosIncapacidad) => {
    return crudService.crearRegistro(incapacidadesModel, datosIncapacidad)
  }

export const crearDia = async (datosDia) => {
    return crudService.crearRegistro(diaModel, datosDia)
  }


export const crearFormacion = async (datosFormacion) => {
    return crudService.crearRegistro(formacionModel, datosFormacion)
  }

   export const obtenerVacaciones = async (empleadoId) => {
    try {
      const registros = await vacacionesModel.findMany({
        where: {
          empleadoId: empleadoId,
        },
        include: {
          empleado: {
            select: {
              nombre: true,
              // Puedes agregar otros campos del modelo 'Empleado' que desees incluir
            },
          },
          // Puedes agregar otras relaciones que desees incluir aquí
        },
      });
      return registros;
    } catch (error) {
      console.error(`Error al intentar obtener las vacaciones del empleado ${empleadoId}: ${error.message}`);
      return null;
    }
  };


   export const obtenerPermiso = async (empleadoId) => {
    try {
      const registros = await permisoModel.findMany({
        where: {
          empleadoId: empleadoId,
        },
        include: {
          empleado: {
            select: {
              nombre: true,
              // Puedes agregar otros campos del modelo 'Empleado' que desees incluir
            },
          },
          // Puedes agregar otras relaciones que desees incluir aquí
        },
      });
      return registros;
    } catch (error) {
      console.error(`Error al intentar obtener los permisos del empleado ${empleadoId}: ${error.message}`);
      return null;
    }
  };

   export const obtenerIncapacidad = async (empleadoId) => {
    try {
      const registros = await incapacidadesModel.findMany({
        where: {
          empleadoId: empleadoId,
        },
        include: {
          empleado: {
            select: {
              nombre: true,
              // Puedes agregar otros campos del modelo 'Empleado' que desees incluir
            },
          },
          // Puedes agregar otras relaciones que desees incluir aquí
        },
      });
      return registros;
    } catch (error) {
      console.error(`Error al intentar obtener las incapacidades del empleado ${empleadoId}: ${error.message}`);
      return null;
    }
  };


   export const obtenerDia = async (empleadoId) => {
    try {
      const registros = await diaModel.findMany({
        where: {
          empleadoId: empleadoId,
        },
        include: {
          empleado: {
            select: {
              nombre: true,
              // Puedes agregar otros campos del modelo 'Empleado' que desees incluir
            },
          },
          // Puedes agregar otras relaciones que desees incluir aquí
        },
      });
      return registros;
    } catch (error) {
      console.error(`Error al intentar obtener los permisos del empleado ${empleadoId}: ${error.message}`);
      return null;
    }
  };

   export const obtenerFormacion = async (empleadoId) => {
    try {
      const registros = await formacionModel.findMany({
        where: {
          empleadoId: empleadoId,
        },
        include: {
          empleado: {
            select: {
              nombre: true,
              // Puedes agregar otros campos del modelo 'Empleado' que desees incluir
            },
          },
          // Puedes agregar otras relaciones que desees incluir aquí
        },
      });
      return registros;
    } catch (error) {
      console.error(`Error al intentar obtener los permisos del empleado ${empleadoId}: ${error.message}`);
      return null;
    }
  };

  



  