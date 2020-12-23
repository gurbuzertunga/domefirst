import * as el from './dom-elements';
import store from './todo-logic';
import {populateDom} from './populate-dom';
import {populateDomByProject} from './populate-dom';

class Project {
    constructor(title) {
      this.title = title;
    }
    static addToDoItem(title, description, priority, dueDate, projectTitle) {
      return { title, description, priority, dueDate, projectTitle };
    }
}



function newProjects() {
    el.newProjectConfirm.addEventListener("click", () => {
      let myNewProject = new Project(el.newProjectField.value);
      el.projects.push(myNewProject);
      store.addProjectToStore(myNewProject);
      populateDom();
      populateDomByProject();
    });
}

function removeProject() {
    el.projectList.addEventListener("click", (e) => {
      if (e.target.className === "fas fa-trash cursor-pointer") {
        store.removeProjectFromStore(e.target.parentElement.textContent);
        store.getToDoFromStore().forEach((toDo) => {
          if (e.target.parentElement.textContent === toDo.projectTitle) {
            store.removeToDoFromStore(toDo.title);
            document.getElementById(toDo.title).remove();
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

  

export { newProjects, removeProject, Project }