let toDos = [];
let projects = [];

const newProjectField = document.getElementById('addProject');
const newProjectConfirm = document.getElementById('addProjectConfirm');
const projectList = document.getElementById('project-list');
const projectTitles = document.getElementById('project-titles');
const toDoTitle = document.getElementById('title');
const toDoDesc = document.getElementById('description');
const toDoPri = document.getElementById('priority');
const toDoDate = document.getElementById('date');
const toDoSubmit = document.getElementById('submit-todo');

let myToDos = [];
let myProjects = [];
let newProject;
let formProject;

class Store {
	static getToDoFromStore() {
		if (localStorage.getItem('localToDos') === null) {
			toDos = [];
		} else {
			toDos = JSON.parse(localStorage.getItem('localToDos'));
		}
		return toDos;
	}

	static getProjectFromStore() {
		if (localStorage.getItem('localProjects') === null) {
			projects = [];
		} else {
			projects = JSON.parse(localStorage.getItem('localProjects'));
		}
		return projects;
	}

	static addToDoToStore(toDo) {
		toDos = Store.getToDoFromStore();
		console.log(toDos);
		toDos.push(toDo);

		localStorage.setItem('localToDos', JSON.stringify(toDos));
	}

	static addProjectToStore(project) {
		projects = Store.getProjectFromStore();
		projects.push(project);
		localStorage.setItem('localProjects', JSON.stringify(projects));

	}

	static removeToDoFromStore() {

	}

	static removeProjectFromStore(title) {
		projects = Store.getProjectFromStore();
		projects.forEach((project) => {
			if (project.title === title) {
				project.remove();
			}
		});
	}
}

class Project {
	constructor(title ='House Chores') {
		this.title = title;
	}
	static addToDoItem(title, description, priority, dueDate, projectTitle) {
		return { title, description, priority, dueDate, projectTitle };
	}
}
let projectTitleId = "";

if (localStorage.getItem('localProjects') === null) {
const myDefaultProject = new Project();
projects.push(myDefaultProject);

console.log(projects);

Store.addProjectToStore(myDefaultProject);

	newProject = document.createElement('li');
	formProject = document.createElement('option');
formProject.setAttribute('id', projects[0].title);
projectList.appendChild(newProject);
projectTitles.appendChild(formProject);
newProject.textContent = projects[0].title;
formProject.textContent = projects[0].title;
projectTitleId = projects[0].title;
}



while (projectList.firstChild) {
	projectList.removeChild(projectList.firstChild);
}


const ongoingToDos = document.getElementById('ongoing-todos');
let priValue = toDoPri.options[toDoPri.selectedIndex];
let proValue = projectTitles.options[projectTitles.selectedIndex];

const selectChangePri = () => {
	toDoPri.addEventListener('change', () => {
		priValue = toDoPri.options[toDoPri.selectedIndex];
		return priValue.value;
	});
}

const selectChangePro = () => {
	projectTitles.addEventListener('change', () => {
		proValue = projectTitles.options[projectTitles.selectedIndex];
		return proValue.value;
	});
}

selectChangePri();
selectChangePro();

function addToDo() {
	toDoSubmit.addEventListener('click', (e) => {
		e.preventDefault();
		let myToDo = Project.addToDoItem(toDoTitle.value, toDoDesc.value, priValue.value, toDoDate.value, proValue.value);
		toDos.push(myToDo);
		console.log(toDos);
		Store.addToDoToStore(myToDo);
		populateDom();
	});
};

function removeToDo() {
	ongoingToDos.addEventListener('click', (e) => {
		console.log(e.target);
		if (ongoingToDos.classList.contains('fas fa-trash')) {
			e.target.parentElement.remove();
		}
	})
}

function newProjects() {
	newProjectConfirm.addEventListener('click', () => {
		let myNewProject = new Project(newProjectField.value);
		projects.push(myNewProject);
		console.log(projects);
		Store.addProjectToStore(myNewProject);
		populateDom();
	})
};

function populateDom() {
	while (ongoingToDos.firstChild) {
		ongoingToDos.removeChild(ongoingToDos.firstChild);
	}
	Array.from(Store.getToDoFromStore()).forEach((toDo) => {
		const newToDo = document.createElement('li');
		ongoingToDos.appendChild(newToDo);
		newToDo.textContent = toDo.title;
		const trashIcon = document.createElement('i');
		trashIcon.setAttribute('class', 'fas fa-trash');
		newToDo.appendChild(trashIcon);
	});

	while (projectList.firstChild) {
		projectList.removeChild(projectList.firstChild);
	}
	Array.from(Store.getProjectFromStore()).forEach((project) => {
		newProject = document.createElement('li');
		formProject = document.createElement('option');
		formProject.setAttribute('id', newProjectField.value);
		projectList.appendChild(newProject);
		projectTitles.appendChild(formProject);
		newProject.textContent = project.title;
		formProject.textContent = project.title;
		projectTitleId = project.title;
	})
	
}

export { newProjects, addToDo, removeToDo, populateDom }