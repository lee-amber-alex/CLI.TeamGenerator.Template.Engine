// TODO: Write code to define and export the Employee class SUPER CLASS
// NAME, ID, EMAIL,

class Employee {

    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    printInfo(){
        for (const key in this){
            console.log(`${key}:${this[key]}`);
        }
    }
getName(){};
getId(){};
getEmail(){};
getRole(){};

};

module.exports = Employee;