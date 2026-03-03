import IIDCard from "../abstract/IIDCard.js";

// School card view for a student.
class SchoolIDCard extends IIDCard {
  constructor(student) {
    super(student);
  }

  printCard() {
    return `
        ----- SCHOOL ID CARD -----
        Name: ${this.student.name}
        ID: ${this.student.id}
        Level: School
        `;
  }
}

export default SchoolIDCard;
