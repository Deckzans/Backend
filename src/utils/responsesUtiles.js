
export const OperacionExitosa = (res, data = null, mensaje = 'Operación exitosa',status = 200) => {
  res.status(status).json({
    success: true,
    mensaje: mensaje,
    data: data,
  });
};

export const manejarError = (res, error, mensaje = 'la operación no se puede realizar',  status = 500) => {
  res.status(status).json({
    success: false,
    mensaje: mensaje,
    error: error.message || error,
  });
};

export const manejarEntidadNoEncontrada = (res, id, entidad = 'Usuario') => {
  console.log(`La entidad ${entidad} con ID ${id} no existe.`);
  res.status(404).json({
    success: false,
    mensaje: `La entidad con ID ${id} no existe, no se puede realizar la acción.`,
    error: null,
  });
};
