import './styles.css';

import { addToDo, removeToDo, showToDoDetails, createDefaultProject } from './components/todo-logic.js';
import { newProjects, removeProject } from './components/project-logic';
import { populateDom, populateDomByProject }from './components/populate-dom';

addToDo();
newProjects();
removeToDo();
removeProject();
populateDom();
populateDomByProject();
showToDoDetails();
createDefaultProject();