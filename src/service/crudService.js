// crudService.js

// Función para consultar todos los registros de una tabla
export const obtenerTodosLosRegistros = async (modelo) => {
  try {
    const registros = await modelo.findMany();
    return registros;
  } catch (error) {
    console.error(`Error al intentar obtener todos los registros: ${error.message}`);
    // No detendremos la aplicación, simplemente devolveremos un arreglo vacío
    return null;
  }
};

// Función genérica para crear un registro
export const crearRegistro = async (modelo, datos) => {
  try {
    const nuevoRegistro = await modelo.create({
      data: datos
    });
    return nuevoRegistro;
  } catch (error) {
    if (error.code === 'P2002') {
      // Manejar el error de clave única para el campo 'usuario'
      console.error('Ya existe un usuario con este nombre.');
      return 'clave_unica';
    }
    else {
      console.error(`Error al crear el registro: ${error.message}`);
      // No detendremos la aplicación, simplemente devolveremos null
      return null;
    }
  }
};

// Función genérica para obtener un registro por ID
export const obtenerRegistroPorId = async (modelo, id) => {
  try {
    const registro = await modelo.findUnique({
      where: {
        id: id,
      },
    });
    return registro;
  } catch (error) {
    console.error(`Error al obtener el registro por ID: ${error.message}`);
    // No detendremos la aplicación, simplemente devolveremos null
    return null;
  }
};

// Función genérica para eliminar un registro por ID
export const eliminarRegistroPorId = async (modelo, id) => {
  try {
    const registroExistente = await obtenerRegistroPorId(modelo, id);

    if (!registroExistente) {
      console.log('La entidad no existe, no se puede eliminar.');
      return { success: false, message: 'La entidad no existe, no se puede eliminar.' };
    }

    const registroEliminado = await modelo.delete({
      where: {
        id: id,
      },
    });

    return { success: true, message: 'Registro eliminado correctamente.' };
  } catch (error) {
    if (error.code === 'P2003' || error.code === 'ER_ROW_IS_REFERENCED_2') {
      console.log('No se puede eliminar el usuario debido a restricciones de clave externa.');
      return { success: false, message: 'No se puede eliminar el usuario debido a restricciones de clave externa.' };
    } else {
      console.error(`Error al intentar eliminar el registro por ID: ${error.message}`);
      return { success: false, message: 'Error al intentar eliminar el registro.' };
    }
  }
};


// Función genérica para editar un registro por ID
export const editarRegistroPorId = async (modelo, id, nuevosDatos) => {
  try {
    const registroExistente = await obtenerRegistroPorId(modelo, id);

    if (registroExistente) {
      const registroEditado = await modelo.update({
        where: {
          id: id,
        },
        data: nuevosDatos,
      });
      return registroEditado;
    } else {
      console.log('La entidad no existe, no se puede editar.');
      return null;
    }
  } catch (error) {
    if (error.code === 'P2003') { // Código de error para restricción de clave externa en Prisma
      console.log('No se puede editar debido a restricciones de clave externa.');
      return null;
    } else {
      console.error(`Error al intentar editar el registro por ID: ${error.message}`);
      return null;
    }
  }
};

