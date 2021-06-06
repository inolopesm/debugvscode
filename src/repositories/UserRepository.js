export class UserRepository {
  constructor() {
    this.users = ['Diego', 'Luis', 'Carlos', 'Jorge']
  }

  get() {
    return []
  }

  add(user) {
    this.users.push(user)
  }
}
