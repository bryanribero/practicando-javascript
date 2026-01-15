const promesaResuelta = Promise.resolve('Promesa resuelta')

console.log(promesaResuelta)

// const promesaRechazada = Promise.reject('Promesa rechazada')

// console.log(promesaRechazada)

const promesaPendiente = new Promise(() => {})
console.log(promesaPendiente)

function promesaDeUnSaludo() {
  return new Promise(() => setTimeout(() => console.log('Hola'), 1000))
}

promesaDeUnSaludo()

function prometemeAmistad() {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.8) {
      resolve('Somos amigos')
    } else {
      reject(new Error('No somos amigos'))
    }
  })
}

console.log(prometemeAmistad())
