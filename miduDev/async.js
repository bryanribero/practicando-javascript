import fs from 'fs/promises' //Necesario importar las promesas

async function getData() {
  try {
    const data = await fs.readFile('dat.txt', 'utf-8')

    console.log(data)
  } catch (err) {
    console.error(err)
  } finally {
    console.log('Final de la promesa')
  }
}

async function ejecutarAsync() {
  await console.log('Cargando data')
  await console.log('-------------------')
  await getData()
}

// ejecutarAsync()

// Comenzando con async

//async siempre retorna una promesa
async function getUrl() {
  return 'http://localhost:3000'
}

getUrl().then((response) => console.log(response))

async function numeroRandom() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const numero = Math.random()

      if (numero < 0.42) {
        resolve(numero)
      } else {
        reject(new Error('Numero random incorrecto'))
      }
    }, 2000)
  })
}

async function principal() {
  try {
    const mathRandom = await numeroRandom()

    console.log(mathRandom)
  } catch (err) {
    console.error(err)
    throw err
  }
}

principal()
