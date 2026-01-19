let room = {
  number: 23
}

let meetup = {
  title: 'Conference',
  occupiedBy: [{ name: 'John' }, { name: 'Alice' }],
  place: room
}

// referencias circulares
room.occupiedBy = meetup
meetup.self = meetup

const stringify = JSON.stringify(meetup, function replacer(key, value) {
  console.log(`${key}: ${value}`)
  return key != '' && value == meetup ? undefined : value
})

console.log(stringify)
