const newProjectField = document.getElementById('addProject');
const newProjectConfirm = document.getElementById('addProjectConfirm');
const projectList = document.getElementById('project-list');
const projectTitles = document.getElementById('project-titles');
const toDoTitle = document.getElementById('title');
const toDoDesc = document.getElementById('description');
const toDoPri = document.getElementById('priority');
const toDoDate = document.getElementById('date');
const toDoSubmit = document.getElementById('submit-todo');
const toDoEdit = document.createElement('button');
toDoEdit.setAttribute('id','edit-toDo');
toDoEdit.setAttribute('type','submit');
toDoEdit.textContent = 'Edit a ToDo Item';
toDoEdit.setAttribute('class','cursor-pointer bg-gray-900 text-white text-xl rounded p-2 w-full mx-auto my-5');
const ongoingToDos = document.getElementById('ongoing-todos');
const form = document.getElementById('form');
const formContainer = document.querySelector('div.form-container');

/* eslint-disable */
let toDos = [];
let projects = [];
let myToDos = [];
let myProjects = [];
let priValue = toDoPri.options[toDoPri.selectedIndex];
let newProject;
let formProject;
let proValue = '';

/* eslint-enable */

// Table Elements
const detailsTbl = document.createElement('table');
detailsTbl.setAttribute('class', 'w-4/5 table-auto mx-auto my-5');
document
  .querySelector('.container')
  .insertAdjacentElement('afterend', detailsTbl);
detailsTbl.style.display = 'none';
const tblHead = document.createElement('thead');
tblHead.setAttribute('class', 'justify-between text-white');
detailsTbl.appendChild(tblHead);
const thRow = document.createElement('tr');
thRow.setAttribute('class', 'bg-gray-800');
tblHead.appendChild(thRow);
const detailsArr = ['Title', 'Description', 'DueDate', 'Priority'];
detailsArr.forEach((heading) => {
  const thData = document.createElement('th');
  thData.setAttribute('class', 'px-16 py-2');
  thData.textContent = heading;
  thRow.appendChild(thData);
});
const tblBody = document.createElement('tbody');
tblBody.setAttribute('class', 'bg-gray-200');
detailsTbl.appendChild(tblBody);

export {
  toDos,
  projects,
  newProjectField,
  newProjectConfirm,
  projectList,
  projectTitles,
  toDoTitle,
  toDoDesc,
  toDoPri,
  toDoDate,
  toDoSubmit,
  ongoingToDos,
  priValue,
  newProject,
  formProject,
  proValue,
  detailsTbl,
  tblHead,
  thRow,
  detailsArr,
  tblBody,
  form,
  formContainer,
  myToDos,
  myProjects,
  toDoEdit,
};