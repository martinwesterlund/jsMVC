import User from './User.js'

export default class Teacher extends User {
  constructor(id, email, password, firstName, lastName, areas) {
    super(id, email, password, firstName, lastName);
    this.areas = areas;
  }
}