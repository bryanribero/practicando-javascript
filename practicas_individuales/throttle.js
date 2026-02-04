function f(a) {
  console.log(a)
}

function throttle(func, ms) {
  let throttled = false,
    thisSaved,
    argsSaved

  function wrapper(...args) {
    if (throttled) {
      thisSaved = this
      argsSaved = args
      return
    }

    throttled = true

    func.call(this, ...args)

    setTimeout(() => {
      throttled = false

      if (argsSaved) {
        wrapper.call(thisSaved, ...argsSaved)
        thisSaved = argsSaved = null
      }
    }, ms)
  }

  return wrapper
}

let prueba = throttle(f, 2000)

prueba('Hola')
prueba('Adios')
prueba('Nada')

setTimeout(() => prueba('A'), 2500)
setTimeout(() => prueba('B'), 3000)
