let dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join()
    }
  }
})

// agregar algunos datos
dictionary.apple = 'Manzana'
dictionary.__proto__ = 'prueba' // // aquí proto es una propiedad clave común

let perro = {
  ladrar: 'guf'
}

Object.setPrototypeOf(dictionary, perro)
// solo manzana y __proto__ están en el ciclo
for (let key in dictionary) {
  console.log(key) // "manzana", después "__proto__"
}

// tu toString en acción
console.log(String(dictionary))

console.log(Object.getPrototypeOf(dictionary))
