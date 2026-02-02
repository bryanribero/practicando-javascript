function debounce(func, ms) {
  let timeout

  return function (...args) {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      func.call(this, ...args)
    }, ms)
  }
}

let f = debounce(console.log, 2000)

f('Hola')
f('Adios')
