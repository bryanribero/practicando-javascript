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
  constructor(name, food) {
    super(name)
    this.food = food
  }
  eat() {
    console.log(`${this.name} esta comiendo ${this.food}`)
  }

  stop() {
    setTimeout(() => super.stop(), 1000)
    super.stop()
    this.eat()
  }
}

let rabbit = new Conejo('Buky', 'Zanahoria')

rabbit.eat('Zanahoria')

rabbit.stop()

console.log(rabbit.speed)

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(rabbit)))
