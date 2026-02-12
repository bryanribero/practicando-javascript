Function.prototype.defer = function (ms) {
  setTimeout(() => {
    this()
  }, ms)
}

function f() {
  console.log('Hola')
}

f.defer(1000)
