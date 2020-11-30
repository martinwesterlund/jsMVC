import User from './User.js'

export default class Student extends User {
  constructor(id, email, password, firstName, lastName, courses) {
    super(id, email, password, firstName, lastName);
    this.courses = courses;
  }

  addCourse() {
    console.log("Course added");
  }
}