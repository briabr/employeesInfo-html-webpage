const Manager = require("../lib/manager")

describe("manager Class", () => {// test suite
    describe("Initialization", () => { // test block
        it("should make an object with name, id & email properties", () => {// actual test
            //Arrange
            const managerwithRoleParameter = new Manager("maria",3, "maria@gmail.com", 6548769897, "manager")
            // const internwithoutRoleParameter = new Intern("Maria Brothers" , "maria33@gmail.com", "1", "new york uni")
            //Act
            //Assert
            expect(managerwithRoleParameter).toEqual({
                name:"maria",
                id: 3,
                email:"maria@gmail.com",
                phone: 6548769897,
                role: "manager"
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