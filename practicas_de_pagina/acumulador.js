function Accumulator(startingValue) {
  this.value = startingValue

  this.read = function (num) {
    this.value += num
    return this
  }
}

const acumulador = new Accumulator(0)

const acumulador2 = new Accumulator(100)

console.log(acumulador2.read(5).read(2).value)

console.log(acumulador.read(1).value)
