let user = {
  namee: 'John',
  years: 30
}

let { namee, years, isAdmin = false } = user

console.log(namee)
console.log(years)
console.log(isAdmin)
