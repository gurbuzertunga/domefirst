
const toDos = [];
const projects = [];

const newProjectField = document.getElementById('addProject');
const newProjectConfirm = document.getElementById('addProjectConfirm');
const projectList = document.getElementById('project-list');
const projectTitles = document.getElementById('project-titles');
const toDoTitle = document.getElementById('title');
const toDoDesc = document.getElementById('description');
const toDoPri = document.getElementById('priority');
const toDoDate = document.getElementById('date');
const toDoSubmit = document.getElementById('submit-todo');


const ongoingToDos = document.getElementById('ongoing-todos');

class ToDoItem {
	constructor(title,description,priority,dueDate,project) {
		this.title = title;
		this.description = description;
		this.priority = priority;
		this.dueDate = dueDate;
		this.project = project;
	};
}

class Project {
	constructor(title) {
			this.title = title;
	}   
	addToDoItem = (title,description,priority,dueDate) => {
		let projectTitle = this.title;
		return { title,description,priority,dueDate,projectTitle };
	}
}

export default function addToDo() {
	toDoSubmit.addEventListener('click', (e) => {
		e.preventDefault();
		 toDos.push(new ToDoItem(toDoTitle.value,toDoDesc.value,toDoPri.value,toDoDate.value));
		console.log(toDos);
		const newToDo = document.createElement('li');
		ongoingToDos.appendChild(newToDo);
		newToDo.textContent = toDos[0].title;
	});
};


function newProjects(){

	newProjectConfirm.addEventListener('click', () => {
			projects.push(new Project(newProjectField.value));
			const newProject = document.createElement('li');
			const formProject = document.createElement('option');			
			formProject.setAttribute('id',projects[0].title);
			projectList.appendChild(newProject);
			projectTitles.appendChild(formProject);
			newProject.textContent = projects[0].title;
			formProject.textContent = projects[0].title;
			console.log(projects)
	})
};
// const toDoProjectName = document.getElementById(projects[0].title)
// console.log(toDoProjectName);

export {newProjects}