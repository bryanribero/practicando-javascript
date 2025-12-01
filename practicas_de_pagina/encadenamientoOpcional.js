let objeto1 = {
  name: 'Pedro'
}

const key = 'name'

let objeto2 = {
  saludar() {
    console.log('Hola buenos dias')
  }
  //   frutas: ['frutilla', 'banana']
}

// console.log(objeto1?.[key])

objeto2.saludar?.()

console.log(objeto2.frutas?.[2])
