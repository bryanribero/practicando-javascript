const estudiantes = [
  { nombre: 'Ana', notas: [50, 80, 99] },
  { nombre: 'Pablo', notas: [56, 77, 100] },
  { nombre: 'Bryan', notas: [53, 33, 45] },
  { nombre: 'Maria', notas: [97, 90, 100] }
]

const mapEstudiantes = estudiantes.values().map((estudiante) => {
  console.log('mapped: ', estudiante.nombre)
  return {
    ...estudiante,
    notas: estudiante.notas.map((nota) => nota / 10)
  }
})

for (const estudiante of mapEstudiantes) {
  console.log(estudiante)
  if (estudiante.nombre === 'Pablo') break
}
