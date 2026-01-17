import fs from 'fs/promises' //Necesario importar las promesas

async function getData() {
  try {
    const data = await fs.readFile('dat.txt', 'utf-8')

    console.log(data)
  } catch (err) {
    console.error(err)
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
