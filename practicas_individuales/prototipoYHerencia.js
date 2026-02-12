Function.prototype.defer = function (ms) {
  const fn = this
  return function (a, b) {
    setTimeout(() => {
      fn(a, b)
    }, ms)
  }
}

function f(a, b) {
  console.log(a + b)
}

f.defer(1000)(1, 2)
