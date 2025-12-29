function obtenerProducto(id) {
  if (id < 0) {
    throw new Error('ID no válido', { cause: 'ID negativo proporcionado' })
  } else if (id > 100) {
    throw new Error('Registro no encontrado', {
      cause: 'ID mayor a 100 proporcionado'
    })
  }
  return { id, nombre: 'Producto' }
}

try {
  const producto = obtenerProducto(-5)
} catch (error) {
  console.error('Error al obtener el producto:', error.message)
  console.error('Causa:', error.cause)
}
