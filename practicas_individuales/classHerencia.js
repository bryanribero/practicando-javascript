class Animal {
  constructor(name) {
    this.speed = 0
    this.name = name
  }

  run(speed) {
    this.speed = speed
    console.log(`${this.name} corre a una velocidad de ${this.speed}`)
  }

  stop() {
    this.speed = 0
    console.log(`${this.name} se detuvo a descansar`)
  }
}

let animal = new Animal('Firulais')

class Conejo extends Animal {
  eat(food) {
    console.log(`${this.name} esta comiendo ${food}`)
  }
}

let rabbit = new Conejo('Buky')

rabbit.eat('Zanahoria')

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(rabbit)))
