function sum(...sum) {
  let total = 0
  for (let num of sum) {
    total += num
  }

  return total
}

console.log(sum(1, 2, 3))

const arr1 = [1, 2, 3]

const copy = [...arr1]

console.log(copy)

function prueba(...params) {
  let [a, b, c, ...demas] = params

  console.log(a, b, c, demas)
}

prueba(1, 2, 3, 4, 5)
