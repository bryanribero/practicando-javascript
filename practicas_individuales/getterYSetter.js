let obj = {
  name: 'Pedro',
  get sayName() {
    return `${this.name}`
  },

  set sayName(value) {
    this.name = value
  }
}

obj.sayName = 'Jose'

console.log(obj.sayName)
