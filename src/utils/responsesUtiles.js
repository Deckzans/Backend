
export const OperacionExitosa = (res, data = null, mensaje = 'Operación exitosa',status = 200) => {
  res.status(status).send({
    success: true,
    mensaje: mensaje,
    data: data,
  });
};

export const manejarError = (res, error, mensaje = 'La operación no se puede realizar', status = 500) => {
  res.status(status).send({
    success: false,
    mensaje: mensaje,
    error: error.message || error,
    status: status // Se incluye el código de estado proporcionado en la respuesta
  });
};

export const manejarEntidadNoEncontrada = (res, id, entidad = 'Usuario') => {
  console.log(`La entidad ${entidad} con ID ${id} no existe.`);
  res.status(404).send({
    success: false,
    mensaje: `La entidad con ID ${id} no existe, no se puede realizar la acción.`,
    error: error,
  });
};
