function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7]

console.log(arr.filter(inBetween(2, 4)))

function inArray(array) {
  return function (x) {
    return array.includes(x)
  }
}

console.log(arr.filter(inArray([1, 2, 20])))
