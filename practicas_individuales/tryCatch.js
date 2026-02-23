try {
  throw new Error('Nuevo error de prueba')
} catch (err) {
  console.log(err.name)
} finally {
  console.log('Fin del try .. catch')
}
