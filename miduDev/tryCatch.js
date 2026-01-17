async function probandoCatch() {
  try {
    throw new Error('Error en el try')
  } catch (err) {
    throw err
  }
}

probandoCatch()
  .then(console.log)
  .catch((err) => console.error(`Error capturado: ${err}`))
