import { usuarioModel } from '../models/usuarioModel.js';
import { crudService } from '../service/index.js';


export const crearUsuario = async (datosUsuario) => {
  return crudService.crearRegistro(usuarioModel, datosUsuario)
}

export const eliminarUsuario = async (idUser) => {
  return crudService.eliminarRegistroPorId(usuarioModel, idUser)
}

export const obtenerUsuarios = async () => {
  return crudService.obtenerTodosLosRegistros(usuarioModel)
}

export const obtenerUsuario = async (idUser) => {
  return crudService.obtenerRegistroPorId(usuarioModel, idUser)
}

export const editarUsuario = async (idUser,datosNew) => { 
  return crudService.editarRegistroPorId(usuarioModel,idUser,datosNew)
} 

//parte del login
export const obtenerUsuarioPorNombre = async (nombreUsuario) => {
  try {
    const usuario = await usuarioModel.findUnique({
      where: {
        usuario: nombreUsuario,
      },
    });
    return usuario;
  } catch (error) {
    console.error(`Error al obtener el usuario por nombre de usuario: ${error.message}`);
    return null;
  }
};