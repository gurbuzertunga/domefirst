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

class Project {
	constructor(title) {
			this.title = title;
	}   
	static addToDoItem (title,description,priority,dueDate, projectTitle)  {
		return { title,description,priority,dueDate,projectTitle };
	}
}




let projectTitleId = "";
let defaultProject = new Project('House Chores');
	let newProject = document.createElement('li');
	let formProject = document.createElement('option');			
	formProject.setAttribute('id',defaultProject.title);
	projectList.appendChild(newProject);
	projectTitles.appendChild(formProject);
	newProject.textContent = defaultProject.title;
	formProject.textContent = defaultProject.title;
	projectTitleId = defaultProject.title;



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

export default function addToDo() {
	toDoSubmit.addEventListener('click', (e) => {
		e.preventDefault();
		 toDos.push(Project.addToDoItem(toDoTitle.value,toDoDesc.value,priValue.value,toDoDate.value,proValue.value));
		console.log(toDos);
		const newToDo = document.createElement('li');
		ongoingToDos.appendChild(newToDo);
		newToDo.textContent = toDoTitle.value;
		const trashIcon = document.createElement('i');
		trashIcon.setAttribute('class', 'fas fa-trash');
		newToDo.appendChild(trashIcon);
		
	});
};


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
	})
};


export {newProjects}