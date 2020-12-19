import './styles.css';

import { newProjects, addToDo, removeToDo, removeProject, populateDom, populateDomByProject } from './components/todo-logic.js';

addToDo();
newProjects();
removeToDo();
removeProject();
populateDom();
populateDomByProject();