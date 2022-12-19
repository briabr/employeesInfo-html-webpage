const Employee = require('./employee')
class Manager extends Employee{
    constructor(name, id, email, phone){
        super(name,email, id)
        this.phone = phone;
        this.role = 'manager'
    }
    getPhone(){
        return this.phone
    }
    getRole(){
        return this.role
    }
}
module.exports = Manager