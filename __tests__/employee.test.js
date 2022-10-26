const Employee = require("../lib/employee")

describe("Employee Class", () => {
    describe("Initialization", () => {
        it("should make an object with name, id & email properties", () => {
            //Arrange
            const employee = new Employee("Lily Brothers" , "1", "lilybro733@git.com", )
            //Act
            //Assert
            expect(employee).toEqual({
                name: "Lily Brothers",
                id: "1",
                email: "lilybro733@git.com"

            })
        })
    })
})