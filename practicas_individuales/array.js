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
    .map((element, index) => (index == 0 ? element : element[0].toUpperCase() + element.slice(1)))
    .join('')

console.log(camelize('list-style-image'))
