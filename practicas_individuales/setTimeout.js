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

/* printNumber(1, 5) */

function PrintNumberInterval(from, to) {
  let current = from

  let timeId = setInterval(() => {
    console.log(current)

    if (current == to) {
      clearInterval(timeId)
    }

    current++
  }, 1000)
}

PrintNumberInterval(1, 5)
