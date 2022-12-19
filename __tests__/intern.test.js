const Intern = require("../lib/intern")

describe("Intern Class", () => {// test suite
    describe("Initialization", () => { // test block
        it("should make an object with name, id & email properties", () => {// actual test
            //Arrange
            const internwithRoleParameter = new Intern("maria","2", "maria@gmail.com", "columbia", "intern")
            // const internwithoutRoleParameter = new Intern("Maria Brothers" , "maria33@gmail.com", "1", "new york uni")
            //Act
            //Assert
            expect(internwithRoleParameter).toEqual({
                name:"maria",
                id:"2",
                email:"maria@gmail.com",
                school: "columbia",
                role: "intern"
            })
            // expect(internwithoutRoleParameter).toEqual({//assertion 
            //     name: "Maria Brothers",
            //     email: "maria33@gmail.com",
            //     id: "1",
            //     school: "new york uni",
            //     role:"intern"

            // })
        })
    })
})