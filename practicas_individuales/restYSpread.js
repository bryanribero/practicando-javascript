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
