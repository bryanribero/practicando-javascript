import fs from 'fs'

function getData() {
  const data = fs.readFile('dato.txt', 'utf-8', (err, datos) => {
    if (err) throw err
    console.log(datos)
  })

  return data
}

// getData()

const obtenerDato = (callback) => {
  setTimeout(() => {
    callback()
  }, 1000)
}

const consola = () => {
  console.log('Hola despues de un tiempo')
}

obtenerDato(consola)
