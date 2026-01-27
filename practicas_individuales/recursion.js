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

function sumToRecursivo(n) {
  return n == 1 ? n : n + sumToRecursivo(n - 1)
}

console.log(sumToRecursivo(1))

function sumAritmetica(a, d, n) {
  const suma = (n / 2) * (2 * a + (n - 1) * d)
  return suma
}

console.log(sumAritmetica(1, 2, 3))
