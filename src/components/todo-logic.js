const toDoTitle = document.getElementById('title');
const toDoDesc = document.getElementById('description');
const toDoPri = document.getElementById('priority');
const toDoDate = document.getElementById('date');
const toDoSubmit = document.getElementById('submit-todo')
const toDos = [];

const ongoingToDos = document.getElementById('ongoing-todos');

class ToDoItem {
	constructor(title,description,priority,dueDate) {
		this.title = title;
		this.description = description;
		this.priority = priority;
		this.dueDate = dueDate;
	};


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