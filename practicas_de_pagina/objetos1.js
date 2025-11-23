let user = {}

let user2 = new Object()

user.name = 'Jhon'
user['surname'] = 'Smith'

user2.name = 'Jhon'
user2['surname'] = 'Smith'

user.name = 'pete'

delete user.name

delete user2['name']

console.log(user2)
