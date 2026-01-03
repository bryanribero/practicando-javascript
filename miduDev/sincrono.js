import fs from 'fs'

function leerDatos() {
  const dato = fs.readFileSync('dato.txt', 'utf-8')
  return dato
}

console.log(leerDatos())
console.log('--------------')
