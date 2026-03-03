import IStudentFactory from "../abstract/IStudentFactory.js";
import UniversityStudent from "./UniversityStudent.js";
import UniversityIDCard from "./UniversityIDCard.js";

// Concrete factory for university-related objects.
class UniversityFactory extends IStudentFactory {
  createStudent(name, id, numberOfCourses) {
    return new UniversityStudent(name, id, numberOfCourses);
  }

  createIDCard(student) {
    return new UniversityIDCard(student);
  }
}

export default UniversityFactory;
