import fs from 'fs/promises' //Necesario importar las promesas

async function getData() {
  try {
    const data = await fs.readFile('dat.txt', 'utf-8')

    console.log(data)
  } catch (err) {
    console.error(err)
  }
}

getData()
