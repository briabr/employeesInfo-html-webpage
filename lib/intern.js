const Employee = require('./employee')
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, email, id)
        this.school = school;
        this.role = 'intern'
    }
   
    getSchool(){
        return this.school
    }
    getRole(){
        return this.role
    }
}
module.exports = Intern
