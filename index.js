const inquirer = require ('inquirer')
const Engineer = require ('./lib/engineer')
const Manager = require ('./lib/manager')
const Intern = require ('./lib/intern')
const fs = require('fs');
const util = require("util");
const writeToFile = util.promisify(fs.writeFile);



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
            email: answers.manager_email,
            id : answers.manager_id,
        }
        let manager_object = new Manager(obj)
        employeeArray.push(manager_object)
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
            generateHtml(answers){
                
            }
            return

        }
    })

}
function internOperations(){
    inquirer.prompt(internQuestions).then(answers => {
        let obj= {
            name: answers.intern_name,
            email: answers.intern_email,
            id : answers.intern_id,
            school: answers.intern_school
        }
        let intern_object = new Intern(obj)
        employeeArray.push(intern_object)
        console.log(employeeArray)
        askChoices()
    })

}
function engineerOperations(){
    inquirer.prompt(engineerQuestions).then(answers => {
        let obj= {
            name: answers.engineer_name,
            email: answers.engineer_email,
            id : answers.engineer_id,
            github: answers.engineer_github
        }
        let engineer_object = new Engineer(obj)
        employeeArray.push(engineer_object)
        console.log(employeeArray)
        askChoices()
        
    })
}
startQuestions()

function generateHtml(answers) {
    console.log(answers)
      return `<!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>My Team</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
          <link rel="stylesheet" href="./style.css">
          <script src="https://kit.fontawesome.com/c502137733.js"></script>
      </head>
      
      <body>
          <div class="container">
              <div class="row">
                  <div class="col-12 jumbotron mb-3 main-header bg-danger">
                      <h1 class="text-center text-white">My Team</h1>
                  </div>
              </div>
          </div>
          
          <div class="container1">
              <div class="row">
                  <div class="row col-12 d-flex justify-content-center">
                      <div class="manager-employee-card">
                          <div class="card-header bg-primary text-white">
                              <h2 class="card-title">${answers.manager_name}</h2>
                              <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
                          </div>
                          <div class="card-content">
                              <ul class="list-group">
                                  <li class="list-group-item">${answers.manager_id}: 1</li>
                                  <li class="list-group-item">Email: <a href="mailto:${answers.manager_email}">${answers.manager_email}</a></li>
                                  <li class="list-group-item">Office number: 1</li>
                              </ul>
                          </div>
                      </div>
      
                      <div class="engineer-employee-card">
                          <div class="card-header bg-primary text-white">
                              <h2 class="card-title">${answers.engineer_name}</h2>
                              <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
                          </div>
                          <div class="card-content">
                              <ul class="list-group">
                                  <li class="list-group-item">ID: 2</li>
                                  <li class="list-group-item">Email: <a href="mailto:${answers.engineer_email}">${answers.engineer_email}</a></li>
                                  <li class="list-group-item">GitHub: <a href="https://github.com/lisaleusieur" target="_blank" rel="noopener noreferrer">${answers.engineer_name}</a></li>
                              </ul>
                          </div>
                      </div>
      
                  <div class="engineer-employee-card">
                      <div class="card-header bg-primary text-white">
                          <h2 class="card-title">${answers.engineer_name}</h2>
                          <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
                      </div>
                      <div class="card-content">
                          <ul class="list-group">
                              <li class="list-group-item">ID: 3</li>
                              <li class="list-group-item">Email: <a href="mailto:${answers.engineer_email}">${answers.engineer_email}</a></li>
                              <li class="list-group-item">GitHub: <a href="https://github.com/fatimalohia" target="_blank" rel="noopener noreferrer">${answers.engineer_name}</a></li>
                          </ul>
                      </div>
                  </div>
      
                  <div class="engineer-employee-card">
                      <div class="card-header bg-primary text-white">
                          <h2 class="card-title">${answers.engineer_name}</h2>
                          <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
                      </div>
                      <div class="card-content">
                          <ul class="list-group">
                              <li class="list-group-item">ID: 4</li>
                              <li class="list-group-item">Email: <a href="mailto:${answers.engineer_email}">${answers.engineer_email}</a></li>
                              <li class="list-group-item">GitHub: <a href="https://github.com/victoriapopova" target="_blank" rel="noopener noreferrer">${answers.engineer_name}</a></li>
                          </ul>
                      </div>
                  </div>
      
                  <div class="intern-employee-card">
                      <div class="card-header bg-primary text-white">
                          <h2 class="card-title">${answers.intern_name}</h2>
                          <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
                      </div>
                      <div class="card-content">
                          <ul class="list-group">
                              <li class="list-group-item">ID: 0</li>
                              <li class="list-group-item">Email: <a href="mailto:${answers.intern_email}">${answers.intern_email}</a></li>
                              <li class="list-group-item">School: ${answers.intern_school}</li>
                          </ul>
                      </div>
                  </div>
      
              </div>
          </div>
      </div>
      </body>
      </html>`;      
    }
  
  