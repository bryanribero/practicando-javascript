const arr1 = [1, 2, 3]

const arr2 = [...arr1]

const styles = ['jazz', 'blues']
styles.push('rock-n-roll')
styles[Math.floor((styles.length - 1) / 2)] = 'Classic'
styles.shift()
styles.unshift('rap', 'reggae')

console.log(styles)

const getMaxSubSum = (arr) => {
  let maxSum = 0
  let numeroActual = 0

  for (const item of arr) {
    numeroActual += item

    maxSum = Math.max(maxSum, numeroActual)

    if (numeroActual < 0) numeroActual = 0
  }
  return maxSum
}

console.log(getMaxSubSum([100, -9, 2, -3, 5]))

const camelize = (str) =>
  str
    .split('-')
    .map((e, i) => (i === 0 ? e : e[0].toUpperCase() + e.slice(1)))
    .join('-')

console.log(camelize('background-color'))

function filterRange(arr, a, b) {
  return arr.filter((e) => e >= a && e <= b)
}

console.log(filterRange([1, 2, 3, 4, 5, 6, 7, 8], 4, 6))

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i]

    if (value < a || value > b) {
      arr.splice(i, 1)
      i--
    }
  }
  return arr.sort()
}

console.log(filterRangeInPlace([5, 3, 8, 1], 1, 4))

const descOrder = (arr) => arr.sort((a, b) => b - a)

console.log(descOrder([2, 3, 6, 9, 33, -21, -54]))
