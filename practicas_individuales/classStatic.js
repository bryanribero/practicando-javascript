class Rabbit extends Object {
  constructor(name) {
    super()
    this.name = name
  }
}

let rabbit = new Rabbit('Rab')

console.log(rabbit.hasOwnProperty('name')) // Error

class Saludo {
  static saludar = 'Hola buenos dias'

  hablar = 'Hola'
}

let saludo = new Saludo()

console.log(saludo.hablar)
