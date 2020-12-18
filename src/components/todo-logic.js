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

let myToDos;
let myProjects;

class Store {
	static getToDoFromStore() {
		if(localStorage.getItem('localToDos') === null) {
			myToDos = [];
		} else {
			myToDos = JSON.parse(localStorage.getItem('localToDos'));
		}
	}

	static getProjectFromStore() {
		if (localStorage.getItem('localProjects') === null) {
			myProjects = [];
		} else {
			myProjects = JSON.parse(localStorage.getItem('localProjects'));
		}
	}

	static addToDoToStore (toDo) {
		myToDos = Store.getToDoFromStore();
		myToDos.push(toDo);
		localStorage.setItem('localToDos', JSON.stringify(myToDos));
	}

	static addProjectToStore (project) {
		myProjects = Store.getProjectFromStore();
		myProjects.push(project);
		localStorage.setItem('localProjects', JSON.stringify(myProjects));

	}

	static removeToDoFromStore() {

	}

	static removeProjectFromStore(title) {
		myProjects = Store.getProjectFromStore();
		myProjects.forEach((project) => {
			if (project.title === title) {
				project.remove();
			}
		});
	}
}

class Project {
	constructor(title) {
			this.title = title;
	}   
	static addToDoItem (title,description,priority,dueDate, projectTitle)  {
		return { title,description,priority,dueDate,projectTitle };
	}
}

	let projectTitleId = "";
	const myDefaultProject = new Project('House Chores');
	projects.push(myDefaultProject);
	console.log(projects);
	Store.addProjectToStore(myDefaultProject);
	let newProject = document.createElement('li');
	let formProject = document.createElement('option');			
	formProject.setAttribute('id',project[0].title);
	projectList.appendChild(newProject);
	projectTitles.appendChild(formProject);
	newProject.textContent = project[0].title;
	formProject.textContent = project[0].title;
	projectTitleId = project[0].title;
		



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
		let myToDo = Project.addToDoItem(toDoTitle.value,toDoDesc.value,priValue.value,toDoDate.value,proValue.value);
		toDos.push(myToDo);
		console.log(toDos);
		Store.addToDoToStore(myToDo);
		populateDom();
	});
};

function removeToDo() {
	ongoingToDos.addEventListener('click', (e) => {
		console.log(e.target);
	})
}

function newProjects(){
			newProjectConfirm.addEventListener('click', () => {
				let myNewProject = new Project(newProjectField.value);
			projects.push(myNewProject);
			console.log(projects);
			Store.addProjectToStore(myNewProject);
			newProject = document.createElement('li');
			formProject = document.createElement('option');			
			formProject.setAttribute('id',newProjectField.value);
			projectList.appendChild(newProject);
			projectTitles.appendChild(formProject);
			newProject.textContent = newProjectField.value;
			formProject.textContent = newProjectField.value;
			projectTitleId = newProjectField.value;
			const trashIcon = document.createElement('i');
			trashIcon.setAttribute('class', 'fas fa-trash');
			newToDo.appendChild(trashIcon);
	})
};

function populateDom() {
	while( ongoingToDos.firstChild ){
		ongoingToDos.removeChild( ongoingToDos.firstChild );
	  }
	  Array.from(Store.getToDoFromStore()).forEach((toDo) => {
		const newToDo = document.createElement('li');
		ongoingToDos.appendChild(newToDo);
		newToDo.textContent = toDo.title;
		const trashIcon = document.createElement('i');
		trashIcon.setAttribute('class', 'fas fa-trash');
		newToDo.appendChild(trashIcon);
	})
	
}

export {newProjects, addToDo, removeToDo, populateDom}