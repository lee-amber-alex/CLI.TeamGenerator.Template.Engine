const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    this.school = school;
  }

  getRole() {
    return "Intern";
  }
}

const intern = new Intern(name, id, email, school);

module.export = Intern;
