let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' }
]
const readMessages = new WeakSet()

readMessages.add(messages[0])
readMessages.add(messages[1])

console.log(`Read message 1: ${readMessages.has(messages[0])}`)

const date = new Date()

const readMessagesDate = new WeakMap()

for (const obj of messages) {
  readMessagesDate.set(obj, date)
}

console.log(readMessagesDate.get(messages[1]))
