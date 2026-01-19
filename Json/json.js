const fecha = new Date('2024-02-10')

console.log(fecha.toJSON())

const schedule = {
  meeting: [
    { name: 'Reunion', date: new Date(2026, 1, 15, 14, 0, 0) },
    { name: 'Salida', date: new Date(2026, 1, 15, 16, 0, 0) }
  ]
}

const scheduleJson = JSON.stringify(schedule)

console.log(scheduleJson)
