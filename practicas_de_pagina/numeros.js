const num1 = '123Hola'
const num2 = 2

console.log(parseInt(num1) + num2)

console.log(isNaN(parseInt(num1)))

console.log(Math.round(6.35 * 10) / 10)

function lectura() {
  let numero

  do {
    numero = +prompt('Ingrese un numero:', '')
  } while (isNaN(numero))

  alert(numero)
  return numero
}

function readNumber() {
  let numero

  do {
    numero = prompt('Ingrese un numero:', '')

    alert(numero)
  } while (isNaN(numero))
}

readNumber()
