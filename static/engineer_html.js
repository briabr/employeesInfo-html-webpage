function generateEngineer(engineer){
    return `<div class="engineer-employee-card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="card-content">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: ${engineer.getEmail()}<a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: ${engineer.getGithub()}<a href="${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getRole()}</a></li>
        </ul>
    </div>
</div>`
}
module.exports = generateEngineer