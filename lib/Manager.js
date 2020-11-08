// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");



class Manager extends Employee{
    constructor(name, id, email, gitHub, officeNumber){

        super(name, id, email)
        this.gitHub = gitHub;
        this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager";
    }
}

const manager = new Manager();
module.export = Manager;