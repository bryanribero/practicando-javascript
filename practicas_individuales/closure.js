let value = 'Sorprise'

function f() {
  let value = 'New Sorprise'

  function g() {
    debugger
  }

  return g
}

let g = f()

g()
