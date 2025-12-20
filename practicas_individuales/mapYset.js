const unique = (arr) => Array.from(new Set(arr))

let values = ['Hare', 'Krishna', 'Hare', 'Krishna', 'Krishna', 'Krishna', 'Hare', 'Hare', ':-O']

// console.log(unique(values))

const aclean = (arr) => {
  let map = new Map()

  for (let word of arr) {
    const sorted = word.toLowerCase().split('').sort().join('')

    map.set(sorted, word)
  }

  return Array.from(map.values())
}

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares']

// console.log(aclean(arr))

let newMap = new Map([['name', 'jose']])

let keys = Array.from(newMap.keys())

console.log(keys)

const arrayx = [
  ['MEX', 'CAN'],
  ['UK', 'GER'],
  ['CAN', 'UK']
]

const newarr = arrayx[0]

console.log(newarr)
