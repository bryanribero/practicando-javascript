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

promesaDeNumero().then((response) => console.log(response))
