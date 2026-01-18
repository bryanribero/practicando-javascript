async function precioBackup() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1500)
    }, 3000)
  })
}

async function precioStandar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(2000)
    }, 2500)
  })
}

Promise.allSettled([precioBackup(), precioStandar()]).then((respuesta) => {
  respuesta.forEach((promesa, index) => {
    if (promesa.status === 'fulfilled') {
      console.log(`Promesa en el index ${index} es: ${promesa.value}`)
    } else {
      console.error(`Promesa en el index ${index} fue rejectada: ${promesa.reason}`)
    }
  })
})
