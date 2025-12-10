const ucFirst = (str) => str ?? str[0].toUpperCase() + str.slice(1)

console.log(ucFirst('2'))

const checkSpam = (str) => str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')

console.log(checkSpam('ViaGra loca'))
