// function checkAge(age) {
//   return age > 18 ? true : confirm('¿Tus padres te lo permitieron?')
// }

const checkAge = (age) => age > 18 || confirm('Tus padres te lo permitieron?')

const edad = prompt('Que edad tienes?', 18)

checkAge(edad)
