import * as el from './dom-elements';
import store from './local-storage';
import { populateDom, populateDomByProject } from './populate-dom';

class Project {
  constructor(title) {
    this.title = title;
  }
}

function createDefaultProject() {
  if (localStorage.getItem('localProjects') === null) {
    const myDefaultProject = new Project('House chores');
    el.projects.push(myDefaultProject);

    store.addProjectToStore(myDefaultProject);
    const projectOpt = document.createElement('option');
    projectOpt.setAttribute('value', el.projects[0].title);
    projectOpt.textContent = `${el.projects[0].title} (Default)`;
    el.projectTitles.appendChild(projectOpt);
    el.projectTitles.options[
      el.projectTitles.selectedIndex
    ].defaultSelected = true;
  }
}

function newProjects() {
  el.newProjectConfirm.addEventListener('click', () => {
    const myNewProject = new Project(el.newProjectField.value);
    el.projects.push(myNewProject);
    store.addProjectToStore(myNewProject);
    populateDom();
    populateDomByProject();
  });
}

function removeProject() {
  el.projectList.addEventListener('click', (e) => {
    if (e.target.className === 'fas fa-trash cursor-pointer') {
      store.removeProjectFromStore(e.target.parentElement.textContent);
      store.getToDoFromStore().forEach((toDo) => {
        if (e.target.parentElement.textContent === toDo.projectTitle) {
          store.removeToDoFromStore(toDo.toDoTitle);
          el.projectList.removeChild(document.getElementById(toDo.toDoTitle));
        }
      });
      e.target.parentElement.remove();
      el.projectTitles.childNodes.forEach((option) => {
        if (option.textContent === e.target.parentElement.textContent) {
          option.remove();
        }
      });
    }
  });
}

export {
  newProjects,
  removeProject,
  Project,
  createDefaultProject,
};
