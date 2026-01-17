// Usando promise.any para que la primera promesa al resolverse sea la que va a devolver.

async function precioBackup() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1500)
    }, 3000)
  })
}

async function precioStandar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2000)
    }, 2500)
  })
}

Promise.any([precioBackup(), precioStandar()])
  .then(console.log)
  .catch((err) => console.error(err))
