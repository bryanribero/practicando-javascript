function getProductDB(id) {
  if (id < 0 || id > 100) {
    throw new Error('ID no valido')
  }

  return { id: id, producto: 'producto ejemplo' }
}

function getProduct(id) {
  try {
    return getProductDB(id)
  } catch (errorOrigin) {
    throw new Error(`Error al obtener el producto con el ID: ${id}`, { cause: errorOrigin })
  }
}

try {
  const producto = getProduct(-5)
  console.log(`Producto: ${producto}`)
} catch (err) {
  console.log('Error capturado:', err.message)

  console.log('Error original:', err.cause.message)
}
