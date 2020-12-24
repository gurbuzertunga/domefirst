import * as el from './dom-elements';
import store from './local-storage';
import { populateDom, populateDomByProject } from './populate-dom';

class Project {
  constructor(title) {
    this.title = title;
  }
}

const createDefaultProject = () => {
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
    populateDom();
  }
};

const newProjects = () => {
  const alertContainer = document.querySelector('div.projects p');
  el.newProjectConfirm.addEventListener('click', () => {
    if (el.newProjectField.value === '') {
      const alert = document.createElement('div');
      alert.innerHTML = 'Project Title cannot be blank';
      alert.setAttribute('id', 'alert');
      alert.setAttribute(
        'class',
        'bg-red-200 relative text-red-800 py-3 px-3 rounded-lg text-xl text-center',
      );
      alertContainer.prepend(alert);
      setTimeout(() => document.getElementById('alert').remove(), 2000);
    } else if (
      store
        .getProjectFromStore()
        .some((project) => project.title === el.newProjectField.value)
    ) {
      const alert = document.createElement('div');
      alert.innerHTML = `${el.newProjectField.value} is already used, type another project`;
      alert.setAttribute('id', 'alert');
      alert.setAttribute(
        'class',
        'bg-red-200 relative text-red-800 py-3 px-3 rounded-lg text-xl text-center',
      );
      alertContainer.prepend(alert);
      setTimeout(() => document.getElementById('alert').remove(), 2000);
    } else {
      const myNewProject = new Project(el.newProjectField.value);
      el.projects.push(myNewProject);
      store.addProjectToStore(myNewProject);
      populateDom();
      populateDomByProject();
    }
  });
};

const removeProject = () => {
  el.projectList.addEventListener('click', (e) => {
    if (e.target.className === 'fas fa-trash cursor-pointer') {
      store.removeProjectFromStore(e.target.parentElement.textContent);
      store.getToDoFromStore().forEach((toDo) => {
        if (e.target.parentElement.textContent === toDo.title) {
          el.ongoingToDos.removeChild(document.getElementById(toDo.toDoTitle));
          store.removeToDoFromStore(toDo.toDoTitle);
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
};

export {
  newProjects,
  removeProject,
  Project,
  createDefaultProject,
};
