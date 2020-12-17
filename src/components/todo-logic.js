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

// class ToDoItem {
// 	constructor(title,description,priority,dueDate,project) {
// 		this.title = title;
// 		this.description = description;
// 		this.priority = priority;
// 		this.dueDate = dueDate;
// 		this.project = project;
// 	};
// }

class Project {
	constructor(title) {
			this.title = title;
	}   
	static addToDoItem (title,description,priority,dueDate, projectTitle)  {
		return { title,description,priority,dueDate,projectTitle };
	}
}

export default function addToDo() {
	toDoSubmit.addEventListener('click', (e) => {
		e.preventDefault();
		 toDos.push(Project.addToDoItem(toDoTitle.value,toDoDesc.value,toDoPri.value,toDoDate.value,projectTitleId));
		console.log(toDos);
		const newToDo = document.createElement('li');
		ongoingToDos.appendChild(newToDo);
		newToDo.textContent = toDos[0].title;
	});
};

let projectTitleId = "";
function newProjects(){
	newProjectConfirm.addEventListener('click', () => {
			projects.push(new Project(newProjectField.value));
			const newProject = document.createElement('li');
			const formProject = document.createElement('option');			
			formProject.setAttribute('id',newProjectField.value);
			projectList.appendChild(newProject);
			projectTitles.appendChild(formProject);
			newProject.textContent = newProjectField.value;
			formProject.textContent = newProjectField.value;
			projectTitleId = newProjectField.value;
			console.log(projects)
	})
};

console.log(projectTitleId);
// const toDoProjectName = document.getElementById(projects[0].title)
// console.log(toDoProjectName);

export {newProjects}