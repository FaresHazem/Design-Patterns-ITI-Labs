// Factory contract for creating related student objects.
class IStudentFactory {
  createStudent(name, id, numberOfCourses) {
    throw new Error("Method 'createStudent()' must be implemented.");
  }

  createIDCard(student) {
    throw new Error("Method 'createIDCard()' must be implemented.");
  }
}

export default IStudentFactory;
