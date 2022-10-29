const inquirer = require ('inquirer')
const Engineer = require ('./lib/engineer')
const Manager = require ('./lib/manager')
const Intern = require ('./lib/intern')
const fs = require('fs');
const util = require("util");
const writeToFile = util.promisify(fs.writeFile);
let finalHtml = require('./static/index.js');
let generateManager = require('./static/manager_html')
let generateIntern = require('./static/intern_html')
let generateEngineer = require('./static/engineer_html')

let employeeArray = []
let html_body = ''


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
        let manager_object = new Manager(answers.manager_name, answers.manager_id, answers.manager_email, answers.manager_phone)
        employeeArray.push(manager_object)
        html_body += generateManager(manager_object)
        console.log(employeeArray[0].name.name)
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
            finalHtml(html_body)
            fs.writeFile("./output/employee_dir.html", finalHtml(html_body),(err,result) => {
                if (err){
                    console.log("html genrated")
                }
            })

            return

        }
    })

}
function internOperations(){
    inquirer.prompt(internQuestions).then(answers => {
        let intern_object = new Intern(answers.intern_name, answers.intern_id, answers.intern_email, answers.intern_school)
        html_body += generateIntern(intern_object)
        console.log(intern_object.getEmail())
        employeeArray.push(intern_object)
        console.log(employeeArray)
        askChoices()
    })

}
function engineerOperations(){
    inquirer.prompt(engineerQuestions).then(answers => {
        let engineer_object = new Engineer(answers.engineer_name, answers.engineer_id, answers.engineer_email, answers.engineer_github)
        html_body += generateEngineer(engineer_object)
        employeeArray.push(engineer_object)
        console.log(employeeArray)
        askChoices()
        
    })
}
startQuestions()

