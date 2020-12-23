import * as el from './dom-elements';
import Store from './todo-logic';
import populateDom from './todo-logic';
import populateDomByProject from './todo-logic';

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
      Store.addProjectToStore(myNewProject);
      populateDom();
      populateDomByProject();
    });
}

function removeProject() {
    el.projectList.addEventListener("click", (e) => {
      if (e.target.className === "fas fa-trash cursor-pointer") {
        Store.removeProjectFromStore(e.target.parentElement.textContent);
        Store.getToDoFromStore().forEach((toDo) => {
          if (e.target.parentElement.textContent === toDo.projectTitle) {
            Store.removeToDoFromStore(toDo.title);
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