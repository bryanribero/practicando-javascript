function promesaDeNumero() {
  return new Promise((resolve, reject) => {
    const numeroRandom = Math.random()

    if (numeroRandom < 0.5) {
      resolve(numeroRandom)
    } else {
      reject(new Error(`El numero no supero el aceptado ${numeroRandom}`))
    }
  })
}

function agregarEmojin(mensaje) {
  return new Promise((resolve, reject) => {
    resolve(`${mensaje} 👍`)
  })
}

promesaDeNumero()
  .then((response) => {
    return agregarEmojin(response)
  })
  .then((mensaje) => console.log(mensaje))
  .catch((err) => console.log(err))
  .finally(() => console.log('Promesa terminada'))
