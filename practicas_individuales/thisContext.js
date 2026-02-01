function sayHi(str) {
  console.log(`Hola ${this.name}, ${str}`)
}

let persona = {
  name: 'Pedro'
}

sayHi.call(persona, 'buenos dias.')

function saludoDoble() {}

saludoDoble.sayHi = function (n1, n2) {
  return `Hola ${n1} y ${n2}`
}

function decorating(func) {
  let cache = new Map()

  return function (...args) {
    let key = JSON.stringify(args)

    if (cache.has(key)) {
      return cache.get(key)
    }

    let result = func.call(this, ...args)

    cache.set(key, result)
    return result
  }
}

saludoDoble.sayHi = decorating(saludoDoble.sayHi)

console.log(saludoDoble.sayHi('Pedro', 'Carlos'))
