class ValidationError extends Error {
  constructor(message) {
    super(message)
    this.name = this.constructor.name
  }
}

class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super(`Sin propiedad: ${property}`)
    this.property = property
  }
}

function readUser(json) {
  let data = JSON.parse(json)

  if (!data.age) {
    throw new PropertyRequiredError('age')
  }

  if (!data.name) {
    throw new PropertyRequiredError('name')
  }

  return data
}

try {
  let user = readUser('{"age": "Pedro"}')
} catch (err) {
  if (err instanceof PropertyRequiredError) {
    console.log(`Error de validacion: ${err.message}`)
  } else if (err instanceof SyntaxError) {
    console.log(`SyntaxError: ${err.message}`)
  } else {
    throw err
  }
}
