let fecha = new Date()
// console.log(fecha.toString())

// console.log(fecha.getTimezoneOffset())

fecha.setHours(5)

// console.log(fecha.getHours())

let horario = new Date(2020, 0, 1)

horario.setDate(0)

// console.log(horario.toString())

// console.log(+horario)

const start = Date.now()

for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i
}

const end = Date.now()

// console.log(`El bucle tardo ${end - start} ms`)

// console.log(start)

const fechaActual = new Date(2012, 1, 6, 3, 12)

console.log(fechaActual.toString())
console.log(fechaActual.getDay())

function getLocalDay(date) {
  const days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']

  return days[date.getDay()]
}

let date2 = new Date(2012, 0, 3)

console.log(getLocalDay(date2))

let date3 = new Date(2015, 0, 2)

function getDateAgo(date, days) {
  return new Date(date.getTime() - days * 86400000)
}

console.log(getDateAgo(date3, 365).toString())
