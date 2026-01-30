function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7]

/* console.log(arr.filter(inBetween(2, 4))) */

function inArray(array) {
  return function (x) {
    return array.includes(x)
  }
}

/* console.log(arr.filter(inArray([1, 2, 20]))) */

function makeArmy() {
  let shooters = []

  let i = 0
  while (i < 10) {
    let j = i
    let shooter = function () {
      // crea la función shooter
      console.log(j) // debería mostrar su número
    }

    shooters.push(shooter) // y agregarlo al array
    i++
  }

  // ...y  devolver el array de tiradores
  return shooters
}

let army = makeArmy()

// ... todos los tiradores muestran 10 en lugar de sus 0, 1, 2, 3 ...
army[0]() // 10 del tirador número 0
army[1]() // 10 del tirador número 1
army[2]()
