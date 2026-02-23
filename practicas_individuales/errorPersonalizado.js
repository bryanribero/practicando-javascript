class ValidationError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ValidationError'
  }
}

function readUser(json) {
  let data = JSON.parse(json)

  if (!data.age) {
    throw new ValidationError('Json no contiene: age')
  }

  if (!data.name) {
    throw new ValidationError('Json no contiene: name')
  }

  return data
}

try {
  let user = readUser('{age: "Pedro"}')
} catch (err) {
  if (err instanceof ValidationError) {
    console.log(`Error de validacion: ${err.message}`)
  } else if (err instanceof SyntaxError) {
    console.log(`SyntaxError: ${err.message}`)
  } else {
    throw err
  }
}
