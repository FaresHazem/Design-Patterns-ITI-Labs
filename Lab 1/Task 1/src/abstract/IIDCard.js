// Base ID card type for all card variants.
class IIDCard {
  constructor(student) {
    if (new.target === IIDCard) {
      throw new Error("Cannot instantiate abstract class IIDCard");
    }

    this.student = student;
  }

  printCard() {
    throw new Error("Method 'printCard()' must be implemented.");
  }
}

export default IIDCard;
