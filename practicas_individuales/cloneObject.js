const persona = {
  name: 'jose',
  age: 25,
  isOld: function () {
    return this.age >= 18
  }
}

console.log(persona.isOld())

const newPersona = { ...persona }

newPersona.age = 17

console.log(newPersona.isOld())
