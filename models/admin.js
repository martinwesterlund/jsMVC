import User from './User.js'

export default class Admin extends User {
  constructor(id, email, password, firstName, lastName) {
    super(id, email, password, firstName, lastName);
  }
}
