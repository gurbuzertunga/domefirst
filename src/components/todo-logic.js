const toDos = [];
const addTitleConfirm = document.getElementById('addTaskConfirm')
const addTitle = document.getElementById('addTask');
const ongoingToDos = document.getElementById('ongoing-todos');
export default function addToDo() {

console.log(addTitle.textContent)
addTitleConfirm.addEventListener('click', () => {
    toDos.push(addTitle.value);
    console.log(toDos);
    const newToDo = document.createElement('li');
    ongoingToDos.appendChild(newToDo);
    newToDo.textContent = toDos[0];
}); 
};