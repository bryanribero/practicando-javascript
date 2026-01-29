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
