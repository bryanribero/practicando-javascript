let user = {
  name: 'John',
  years: 30
}

let { name: nombre, years: age, isAdmin = false } = user

console.log(nombre)
console.log(age)
console.log(isAdmin)

function topSalary(salaries) {
  let maxSalary = 0
  let maxName = null

  for (const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary
      maxName = name
    }
  }

  return maxName
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
}

console.log(topSalary(salaries))
