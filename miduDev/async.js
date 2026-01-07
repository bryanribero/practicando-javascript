import fs from 'fs/promises' //Necesario importar las promesas

async function getData() {
  const data = await fs.readFile('dato.txt', 'utf-8')

  return data
}

getData().then((data) => {
  console.log(data)
})
