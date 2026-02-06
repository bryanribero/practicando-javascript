let persona = {
  name: 'Pedro',

  saludar() {
    return `Hola ${this.name}`
  }
}

Object.defineProperty(persona, 'saludar', { enumerable: false })

for (let key in persona) {
  console.log(key)
}
