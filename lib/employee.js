class Employee{
    constructor(name,email,id, employee){ // parametarized constructor 
        this.name = name
        this.email = email
        this.id = id
        this.role = employee || "employee"
    }

    getName(){
        return this.name
    }
    getEmail(){
        return this.email
    }
    getId(){
        return this.id
    }
    getRole(){
        return this.role
    }
}
module.exports = Employee