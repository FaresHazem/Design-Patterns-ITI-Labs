import IStudent from "../abstract/IStudent.js";

// School implementation of the base student.
class SchoolStudent extends IStudent {
  constructor(name, id, numberOfCourses) {
    super(name, id, numberOfCourses);
  }

  getDetails() {
    return `School Student -> Name: ${this.name}, ID: ${this.id}, Courses: ${this.numberOfCourses}`;
  }
}

export default SchoolStudent;
