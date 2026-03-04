class Teacher {
  constructor(name) {
    this.name = name;
  }

  getDetails() {
    return `Teacher: ${this.name}`;
  }
}

class TeacherDecorator {
  constructor(teacher) {
    this.teacher = teacher;
  }

  getDetails() {
    return this.teacher.getDetails();
  }
}

class SalaryDecorator extends TeacherDecorator {
  constructor(teacher, salary) {
    super(teacher);
    this.salary = salary;
  }

  getDetails() {
    return `${super.getDetails()} | Salary: ${this.salary}`;
  }
}

class NationalityDecorator extends TeacherDecorator {
  constructor(teacher, nationality) {
    super(teacher);
    this.nationality = nationality;
  }

  getDetails() {
    return `${super.getDetails()} | Nationality: ${this.nationality}`;
  }
}

class StreetDecorator extends TeacherDecorator {
  constructor(teacher, street) {
    super(teacher);
    this.street = street;
  }

  getDetails() {
    return `${super.getDetails()} | Street: ${this.street}`;
  }
}

export {
  Teacher,
  TeacherDecorator,
  SalaryDecorator,
  NationalityDecorator,
  StreetDecorator,
};
