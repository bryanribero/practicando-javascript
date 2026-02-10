function CreadorFunction(name) {
  this.saludo = `Hola ${name}`
}

CreadorFunction.prototype = {
  ladrar: 'huah'
}

let obj = new CreadorFunction('Pepe')

let obj2 = new obj.constructor('Jose')

console.log(obj.ladrar)
