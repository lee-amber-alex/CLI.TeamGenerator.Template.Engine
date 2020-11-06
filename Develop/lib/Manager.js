// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");



class Manager extends Employee{
    constructor(gitHub, officeNumber, role){

        super(name, id, email)
        this.role = role;
        this.gitHub = gitHub;
        this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager";
    }
}

module.export = Manager;