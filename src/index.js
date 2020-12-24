import './styles.css';

import {
  addToDo, removeToDo, showToDoDetails, editToDo,
} from './components/todo-logic';
import { newProjects, removeProject, createDefaultProject } from './components/project-logic';
import { populateDom, populateDomByProject } from './components/populate-dom';

addToDo();
newProjects();
removeToDo();
removeProject();
populateDom();
populateDomByProject();
showToDoDetails();
createDefaultProject();
editToDo();