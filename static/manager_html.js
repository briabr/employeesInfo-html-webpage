function generateManager(manager){
    return `<div class="row col-12 d-flex justify-content-center">
    <div class="manager-employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
        </div>
        <div class="card-content">
            <ul class="list-group">
                <li class="list-group-item">${manager.getId()}: 1</li>
                <li class="list-group-item">Email: ${manager.getEmail()}<a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: 1</li>
            </ul>
        </div>
    </div>`
}
module.exports = generateManager;