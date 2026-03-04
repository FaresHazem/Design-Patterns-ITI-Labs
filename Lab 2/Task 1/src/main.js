import {
  Teacher,
  SalaryDecorator,
  NationalityDecorator,
  StreetDecorator,
} from "./decorator/TeacherDecorator.js";

const baseTeacher = new Teacher("Fares");
const withSalary = new SalaryDecorator(baseTeacher, 12000);
const withNationality = new NationalityDecorator(withSalary, "Egyptian");
const fullTeacher = new StreetDecorator(withNationality, "Tahrir St.");

console.log(fullTeacher.getDetails());
