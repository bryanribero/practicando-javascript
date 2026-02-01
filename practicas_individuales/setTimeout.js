/* let timerId = setTimeout(function tick() {
  console.log('Tick')
  timerId = setTimeout(tick, 2000)
}, 2000)
 */

setTimeout(() => console.log('Mundo'))

console.log('Hola')

function printNumber(from, to) {
  let current = from

  setTimeout(function go() {
    console.log(current)
    if (current < to) {
      setTimeout(go, 1000)
    }

    current++
  }, 1000)
}

printNumber(1, 5)
