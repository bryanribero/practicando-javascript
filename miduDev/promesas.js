const promesaResuelta = Promise.resolve('Promesa resuelta')

console.log(promesaResuelta)

const promesaRechazada = Promise.reject('Promesa rechazada')

console.log(promesaRechazada)

const promesaPendiente = new Promise(() => {})
console.log(promesaPendiente)
