let prices = {
  banana: 1,
  orange: 2,
  meat: 4
}

const doublePrices = Object.fromEntries(Object.entries(prices).map(([key, value]) => [key, value * 2]))

console.log(doublePrices)

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
}

const sumSalaries = Object.values(salaries).reduce((acc, next) => acc + next, 0)

console.log(sumSalaries)

const countProp = Object.keys(salaries).length

console.log(countProp)
