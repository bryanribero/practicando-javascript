/* let name = 'Jhon'

function sayHi() {
  console.log(`Hi ${name}`)
}

name = 'Pedro'

sayHi()

name = 'Pablito'

 */

/* El entorno lexico de la funcion retornada busca una variable exterior a ella ( name ) y como se encuentra en la function 
makeWorker tomara ese valor, en caso de que no exista tomaria el valor de name pedro */

function makeWorker() {
  let name = 'Jhon'

  return function () {
    console.log(name)
  }
}

let name = 'Pedro'

let work = makeWorker()

work()

/* Al crear 2 instancias distintas de la funcion se crea 2 contextos distintos, por lo tanto cada funcion retornada 
tiene su propio closure sobre su entorno lexico */
function makeCounter() {
  let count = 0

  return function () {
    return count++
  }
}

let count1 = makeCounter()
let count2 = makeCounter()

console.log(count1())
console.log(count1())

console.log(count2())

/* Se pueden recibir parametros en la segunda funcion retornada, al llamar a la funcion se debe utilizar otro () para indicar 
 el argumento de la segunda funcion */
function sum(a) {
  return function (b) {
    return a + b
  }
}

console.log(sum(2)(1))
