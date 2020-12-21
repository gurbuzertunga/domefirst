import './styles.css';

import { newProjects, addToDo, removeToDo, removeProject, populateDom, populateDomByProject, showToDoDetails } from './components/todo-logic.js';

addToDo();
newProjects();
removeToDo();
removeProject();
populateDom();
populateDomByProject();
showToDoDetails();