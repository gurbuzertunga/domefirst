import './styles.css';

import { addToDo, removeToDo, populateDom, populateDomByProject, showToDoDetails } from './components/todo-logic.js';
import { newProjects, removeProject } from './components/project-logic';

addToDo();
newProjects();
removeToDo();
removeProject();
populateDom();
populateDomByProject();
showToDoDetails();