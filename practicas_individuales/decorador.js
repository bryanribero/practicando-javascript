function work(a, b) {
  return a + b // work es una función o método arbitrario
}

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args)
    return func.apply(this, args)
  }

  wrapper.calls = []

  return wrapper
}

work = spy(work)

work(1, 2) // 3
work(4, 5) // 9

console.log(work.calls)

for (let args of work.calls) {
  console.log('call:' + args.join()) // "call:1,2", "call:4,5"
}
