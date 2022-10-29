function generateIntern(intern){
//at each intern we will create a card 

        //loop through each intern 
        return `<div class="intern-employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
        </div>
        <div class="card-content">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: ${intern.getEmail()}<a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>`
 }
 module.exports = generateIntern