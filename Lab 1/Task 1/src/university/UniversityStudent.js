import IStudent from "../abstract/IStudent.js";

// University implementation of the base student.
class UniversityStudent extends IStudent {
  constructor(name, id, numberOfCourses) {
    super(name, id, numberOfCourses);
  }

  getDetails() {
    return `University Student -> Name: ${this.name}, ID: ${this.id}, Courses: ${this.numberOfCourses}`;
  }
}

export default UniversityStudent;
