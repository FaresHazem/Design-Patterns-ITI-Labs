import SchoolFactory from "./school/SchoolFactory.js";
import UniversityFactory from "./university/UniversityFactory.js";

// Create one school student and one university student.
const schoolFactory = new SchoolFactory();
const universityFactory = new UniversityFactory();

const schoolStudent = schoolFactory.createStudent("Fares", 101, 5);
const schoolIdCard = schoolFactory.createIDCard(schoolStudent);

const universityStudent = universityFactory.createStudent("Zoro", 202, 6);
const universityIdCard = universityFactory.createIDCard(universityStudent);

console.log(schoolStudent.getDetails());
console.log(schoolIdCard.printCard());

console.log(universityStudent.getDetails());
console.log(universityIdCard.printCard());
