let promesa = new Promise(function (resolve, reject) {
  setTimeout(() => resolve('Resuelto'), 2000)
})

console.log(promesa)

setTimeout(() => console.log(promesa), 3000)

let promesa2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Error con la promesa')), 3000)
})

console.log(promesa2)

promesa.then((resolve) => console.log(resolve))
