const Employee = require("../lib/employee")

describe("Employee Class", () => {// test suite
    describe("Initialization", () => { // test block
        it("should make an object with name, id & email properties", () => {// actual test
            //Arrange
            const employeewithRoleParameter = new Employee("bria" , "bria@gmail.com", "2","employee")
            const employeewithoutRoleParameter = new Employee("Lily Brothers" , "bria@gmail.com", "1")
            //Act
            //Assert
            expect(employeewithRoleParameter).toEqual({
                name:"bria",
                id:"2",
                email:"bria@gmail.com",
                role: "employee"
            })
            expect(employeewithoutRoleParameter).toEqual({//assertion 
                name: "Lily Brothers",
                id: "1",
                email: "bria@gmail.com",
                role:"employee"

            })
        })
    })
    describe("test getName function", () => {
        const employee_object = new Employee()
 
    })
})
//unit test: function are called units of code. getName() is a unit. 
// test wether the getName function working properly or not
// getName(), is it returning me any name or not? 
//integration test
// end to end 