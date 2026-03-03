import IStudentFactory from "../abstract/IStudentFactory.js";
import SchoolStudent from "./SchoolStudent.js";
import SchoolIDCard from "./SchoolIDCard.js";

// Concrete factory for school-related objects.
class SchoolFactory extends IStudentFactory {
  createStudent(name, id, numberOfCourses) {
    return new SchoolStudent(name, id, numberOfCourses);
  }

  createIDCard(student) {
    return new SchoolIDCard(student);
  }
}

export default SchoolFactory;
