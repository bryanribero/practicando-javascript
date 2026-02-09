let user = {
  name: 'Jhon',
  surname: 'Monton',

  set fullName(value) {
    ;[this.name, this.surname] = value.split(' ')
  },

  get fullName() {
    return `${this.name} ${this.surname}`
  }
}

let admin = {
  isAdmin: true,
  __proto__: user
}

admin.fullName = 'Maria Flores'

console.log(admin.fullName)

console.log(user.fullName)
