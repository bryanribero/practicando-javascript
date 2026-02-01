function sum(a, b) {
  return a + b
}

function catching(func) {
  let cache = new Map()

  return function (a, b) {
    const key = JSON.stringify({ a, b })

    console.log(key)

    if (cache.has(key)) {
      return cache.get(key)
    }

    let result = func(a, b)

    cache.set(key, result)
    return result
  }
}

sum = catching(sum)

console.log(sum(1, 6))
