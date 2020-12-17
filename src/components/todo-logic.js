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

class Store {
	static addToStore (toDo) {
		toDos = Store.getFromStore();
		toDos.push(toDo);
		localStorage.setItem('localToDos', JSON.stringify(toDos));

		projects = Store.getFromStore();
		projects.push(toDo);
		localStorage.setItem('localProjects', JSON.stringify(projects));

	}

	static getFromStore() {
		if(localStorage.getItem(localToDos) === null) {
			toDos = [];
		} else {
			toDos = JSON.parse(localStorage.getItem(localToDos));
		}

		if (localStorage.getItem(localProjects) === null) {
			projects = [];
		} else {
			projects = JSON.parse(localStorage.getItem(localProjects));
		}
	}

	static renoveFromStore() {

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
	projects.push(new Project('House Chores'));
	let newProject = document.createElement('li');
	let formProject = document.createElement('option');			
	formProject.setAttribute('id',projects[0].title);
	projectList.appendChild(newProject);
	projectTitles.appendChild(formProject);
	newProject.textContent = projects[0].title;
	formProject.textContent = projects[0].title;
	projectTitleId = projects[0].title;
	localStorage.setItem('Projects', JSON.stringify(projects[0]));
		



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
		toDos.push(Project.addToDoItem(toDoTitle.value,toDoDesc.value,priValue.value,toDoDate.value,proValue.value));
		console.log(toDos);
		localStorage.setItem('toDos', JSON.stringify(toDos))
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
			projects.push(new Project(newProjectField.value));
			newProject = document.createElement('li');
			formProject = document.createElement('option');			
			formProject.setAttribute('id',newProjectField.value);
			projectList.appendChild(newProject);
			projectTitles.appendChild(formProject);
			newProject.textContent = newProjectField.value;
			formProject.textContent = newProjectField.value;
			projectTitleId = newProjectField.value;
			localStorage.setItem('Projects', JSON.stringify(projects));
	})
};

function populateDom() {
	while( ongoingToDos.firstChild ){
		ongoingToDos.removeChild( ongoingToDos.firstChild );
	  }
	  console.log(Store.getFromStore());
	  Array.from(JSON.parse(localStorage.getItem(toDos))).forEach((toDo) => {
		const newToDo = document.createElement('li');
		ongoingToDos.appendChild(newToDo);
		newToDo.textContent = toDo.title;
		const trashIcon = document.createElement('i');
		trashIcon.setAttribute('class', 'fas fa-trash');
		newToDo.appendChild(trashIcon);
	})
	
}

console.log(toDos);
export {newProjects, addToDo, removeToDo, populateDom}