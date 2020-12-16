const projects = [];
const newProjectField = document.getElementById('addProject');
const newProjectConfirm = document.getElementById('addProjectConfirm');
const projectList = document.getElementById('project-list');

class Project {
    constructor(title) {
        this.title = title;
    }   
}

export default function newProjects(){

    newProjectConfirm.addEventListener('click', () => {
        projects.push(new Project(newProjectField.value));
        const newProject = document.createElement('li');
        projectList.appendChild(newProject);
        newProject.textContent = projects[0].title;
        console.log(projects)
    })
}
