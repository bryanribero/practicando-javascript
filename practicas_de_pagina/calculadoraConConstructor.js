function Calculadora(a, b) {
  this.a = a
  this.b = b

  this.sum = function () {
    return this.a + this.b
  }

  this.mul = function () {
    return this.a * this.b
  }
}

const calculo1 = new Calculadora(5, 2)

console.log(calculo1.mul())

const calculo2 = new Calculadora(10, 10)

console.log(calculo2.sum())
