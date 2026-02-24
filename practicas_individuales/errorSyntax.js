class FormatError extends SyntaxError {
  constructor(message) {
    super(message)
    this.name = this.constructor.name
  }
}

let err = new FormatError('error de formato')

console.log(err.message)
console.log(err.name)
console.log(err.stack)
