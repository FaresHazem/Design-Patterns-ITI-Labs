// Base student type used by all concrete student classes.
class IStudent {
  constructor(name, id, numberOfCourses) {
    if (new.target === IStudent) {
      throw new Error("Cannot instantiate abstract class IStudent");
    }

    this.name = name;
    this.id = id;
    this.numberOfCourses = numberOfCourses;
  }

  getDetails() {
    throw new Error("Method 'getDetails()' must be implemented.");
  }
}

export default IStudent;
