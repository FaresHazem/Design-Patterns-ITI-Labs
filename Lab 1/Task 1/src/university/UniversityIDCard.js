import IIDCard from "../abstract/IIDCard.js";

// University card view for a student.
class UniversityIDCard extends IIDCard {
  constructor(student) {
    super(student);
  }

  printCard() {
    return `
        ----- UNIVERSITY ID CARD -----
        Name: ${this.student.name}
        ID: ${this.student.id}
        Level: University
        `;
  }
}

export default UniversityIDCard;
