let animal = {
  eat: true
}

let humano = {
  correr: true
}

function Rabbit(name) {
  this.name = name
}

Rabbit.prototype = animal

let rabbit = new Rabbit('Buky')

for (let prop in rabbit) {
  console.log(`Prop del objeto: ${prop}`)
}

Rabbit.prototype = humano

let rabbit2 = new Rabbit('Buky')

for (let prop in rabbit2) {
  console.log(`Prop del objeto: ${prop}`)
}
