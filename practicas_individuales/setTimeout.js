let timerId = setTimeout(function tick() {
  console.log('Tick')
  timerId = setTimeout(tick, 2000)
}, 2000)
