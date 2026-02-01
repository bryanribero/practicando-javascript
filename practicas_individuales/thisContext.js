function sayHi(str) {
  console.log(`Hola ${this.name}, ${str}`)
}

let persona = {
  name: 'Pedro'
}

sayHi.call(persona, 'buenos dias.')
