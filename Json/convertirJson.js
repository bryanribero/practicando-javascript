let user = {
  name: 'John Smith',
  age: 35
}

const userStringify = JSON.stringify(user)

const userObject = JSON.parse(userStringify)

console.log(userStringify)

console.log(userObject)
