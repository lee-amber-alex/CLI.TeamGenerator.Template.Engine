// TODO: Write code to define and export the Engineer class.  
// HINT: This class should inherit from Employee. EXTEND

const Employee = require("./Employee");



class Engineer extends Employee{
    constructor( role, gitHub){
        super(name, id, email)
        this.role = role;
        this.gitHub = gitHub;
    }

    getGitHub();
    getRole(){
        return "Engineer"
    }
}

module.export = Engineer;