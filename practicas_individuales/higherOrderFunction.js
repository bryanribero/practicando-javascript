function saludo(fn) {
  return function (name) {
    console.log(`Hola ${name}`)
    return fn(name)
  }
}

const nombrar = (name) => name

const saludar = saludo(nombrar)

console.log(saludar('José'))
