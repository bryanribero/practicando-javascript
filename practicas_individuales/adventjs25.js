function execute(code) {
  let result = 0
  let i = 0

  while (i < code.length) {
    switch (code[i]) {
      case '+':
        result++
        break
      case '-':
        result--
        break
      case '>':
        i++
        break
      case '[':
        if (result === 0) {
          const indexLoopEnd = code.indexOf(']', i)

          i = indexLoopEnd
        }
        break
      case ']':
        if (result !== 0) {
          const indexLoopStart = code.lastIndexOf('[', i)

          i = indexLoopStart
        }
        break
      case '{':
        if (result === 0) {
          const indexConditionEnd = code.indexOf('}', i)

          i = indexConditionEnd
        }
        break
    }

    i++
  }

  return result
}

console.log(execute('>+++[-]'))
