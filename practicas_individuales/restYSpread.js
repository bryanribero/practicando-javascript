function sum(...sum) {
  let total = 0
  for (let num of sum) {
    total += num
  }

  return total
}

console.log(sum(1, 2, 3))
