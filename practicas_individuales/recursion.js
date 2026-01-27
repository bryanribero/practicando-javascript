function pow(x, n) {
  return n == 1 ? x : x * pow(x, n - 1)
}

// console.log(pow(2, 3))
function sumTo(x) {
  let sum = 0
  for (let i = x; i > 0; i--) {
    sum += i
  }
  return sum
}

console.log(sumTo(4))
