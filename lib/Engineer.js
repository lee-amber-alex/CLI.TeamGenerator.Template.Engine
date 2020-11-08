// TODO: Write code to define and export the Engineer class.  
// HINT: This class should inherit from Employee. EXTEND

const Employee = require("./Employee");



class Engineer extends Employee{
    constructor(name, id, email, gitHub){

        super(name, id, email)
        this.gitHub = gitHub;
    }

    getGitHub();
    getRole(){
        return "Engineer"
    }
}

const engineer = new Engineer ();

module.export = Engineer;

