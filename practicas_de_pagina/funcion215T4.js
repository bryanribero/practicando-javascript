function pow(x, n) {
  let total = 1
  for (let i = 0; i < n; i++) {
    total *= x
    console.log(total)
  }
}

pow(4, 3)
