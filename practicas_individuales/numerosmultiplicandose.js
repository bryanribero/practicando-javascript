function multiplicarNum(cantidad) {
  let resultado = 1

  for (let i = 0; i < cantidad; i++) {
    resultado = resultado * 2
  }

  return resultado
}

console.log(multiplicarNum(33))
