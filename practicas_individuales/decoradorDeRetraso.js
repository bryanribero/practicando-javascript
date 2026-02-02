function f(x) {
  console.log(x)
}

function delay(func, delay) {
  return function (...args) {
    setTimeout(() => {
      func.call(this, ...args)
    }, delay)
  }
}

let f1000 = delay(f, 1000)
let f1500 = delay(f, 2000)

f1000('test') // mostrar "test" después de 1000ms
f1500('test') // mostrar "test" después de 1500ms
