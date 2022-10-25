const inquirer = require ('inquirer')
const Engineer = require ('./lib/engineer')
const Manager = require ('./lib/manager')
const Intern = require ('./lib/intern')
const generateTeam = require("./src/template.html");


let employeeArray = []

let managerQuestions = [
    {
    type: 'input',
    name: 'manager_name',
    message: 'Enter your full name'
},{
    type: 'input',
    name: 'manager_id',
    message: 'Enter your employee ID'
},
{
    type: 'input',
    name: 'manager_phone',
    message: 'Enter your phone number'
},
{
    type: 'input',
    name: 'manager_email',
    message: 'Enter your email'
},
]
let engineerQuestions = [{
    type: 'input',
    name: 'engineer_name',
    message: 'Enter your name'
},
{
    type: 'input',
    name: 'engineer_email',
    message: 'Enter your email'
},
{
    type: 'input',
    name: 'engineer_id',
    message: 'Enter your employee ID'
},
{
    type: 'input',
    name: 'engineer_github',
    message: 'Enter your GitHub username'
},
]
let internQuestions = [
    {
        type: 'input',
        name: 'intern_name',
        message: 'Enter your name'
    },
    {
        type: 'input',
        name: 'intern_email',
        message: 'Enter your email'
    },
    {
        type: 'input',
        name: 'intern_school',
        message: 'Enter your school name'
    },
    {
        type: 'input',
        name: 'intern_id',
        message: 'Enter your employee ID'
    },
]

function startQuestions(){
    inquirer.prompt(managerQuestions).then(answers => {
        let obj= {
            name: answers.manager_name,
            email: answer.manager_email,
            id : answer.manager_id,
            role: answer_role
        }
        let manager_object = new Manager(obj)
        askChoices()
    })

}
function askChoices(){
    inquirer.prompt([{
        type: 'list',
        name: 'choice',
        message: 'Please choose from below',
        choices: ["engineer", "intern", "stop"]
    }]).then(answer => {
        if (answer.choice === "engineer"){
            engineerOperations()

        }else if (answer.choice === "intern") {
            internOperations()
        }else if (answer.choice === "stop"){
            exit()
        }
    })

}
function internOperations(){
    inquirer.prompt(internQuestions).then(answers => {
        let obj= {
            name: answers.intern_name,
            email: answer.intern_email,
            id : answer.intern_id,
            school: intern_school
        }
        let intern_object = new Intern(obj)
    })

}
function engineerOperations(){
    inquirer.prompt(engineerQuestions).then(answers => {
        let obj= {
            name: answers.engineer_name,
            email: answer.engineer_email,
            id : answer.engineer_id,
            github: engineer_github
        }
        let engineer_object = new Engineer(obj)
    })
}
