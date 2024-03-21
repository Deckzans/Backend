import { usuarioModel } from '../models/usuarioModel.js';
import { crudService } from '../service/index.js';
import bcrypt from 'bcrypt';

export const crearUsuario = async (datosUsuario) => {
  try {
    const hashedPassword = await bcrypt.hash(datosUsuario.password, 10);
    datosUsuario.password = hashedPassword;
    const nuevoUsuario = await crudService.crearRegistro(usuarioModel, datosUsuario);
    return nuevoUsuario;
  } catch (error) {
    console.error(`Error al crear el usuario: ${error.message}`);
    return null;
  }
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