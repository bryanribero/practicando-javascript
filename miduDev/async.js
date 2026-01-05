import fs from 'fs/promises'

async function getData() {
  const data = await fs.readFile('dato.txt', 'utf-8')

  console.log(data)
}

getData()
