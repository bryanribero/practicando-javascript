function unique(arr) {
  const seteo = new Set(arr)

  return seteo
}

let values = ['Hare', 'Krishna', 'Hare', 'Krishna', 'Krishna', 'Krishna', 'Hare', 'Hare', ':-O']

console.log(unique(values))
