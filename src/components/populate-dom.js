import * as el from './dom-elements';
import store from './local-storage';


function populateDom() {
    while (el.ongoingToDos.firstChild) {
      el.ongoingToDos.removeChild(el.ongoingToDos.firstChild);
    }
  
    Array.from(store.getToDoFromStore()).forEach((toDo) => {
      const newToDo = document.createElement("li");
      const icons = document.createElement('span');
      icons.setAttribute('class', 'flex justify-between items-center w-12');
      const caret = document.createElement("i");
      caret.setAttribute("class", "fas fa-angle-down fa-2x cursor-pointer");
      const trashIcon = document.createElement("i");
      trashIcon.setAttribute("class", "fas fa-trash cursor-pointer");
      newToDo.textContent = toDo.toDoTitle;
      newToDo.setAttribute("id", toDo.toDoTitle);
      newToDo.setAttribute("class", "flex justify-between bg-gray-100 px-2 rounded-md mb-4 border-double border-4 outline-none");
      icons.appendChild(caret);
      icons.appendChild(trashIcon);
      newToDo.appendChild(icons);
      el.ongoingToDos.appendChild(newToDo);
    });
  
    while (el.projectTitles.firstChild) {
      el.projectTitles.removeChild(el.projectTitles.firstChild);
    }
    while (el.projectList.firstChild) {
      el.projectList.removeChild(el.projectList.firstChild);
    }
    Array.from(store.getProjectFromStore()).forEach((project) => {
      el.newProject = document.createElement("li");
      el.formProject = document.createElement("option");
      el.newProject.setAttribute("id", project.title);
      el.newProject.setAttribute("class", "flex justify-between cursor-pointer bg-gray-100 px-2 items-center rounded-md mb-4 border-gray-800 border-double border-4 outline-none");
      el.formProject.setAttribute("value", project.title);
      el.newProject.textContent = project.title;
      if (project.title !== "House bitches") {
        const trashIcon = document.createElement("i");
        trashIcon.setAttribute("class", "fas fa-trash cursor-pointer");
        el.newProject.appendChild(trashIcon);
      }
      el.formProject.textContent = project.title;
      el.projectList.appendChild(el.newProject);
      el.projectTitles.appendChild(el.formProject);
      el.proValue = el.projectTitles.options[el.projectTitles.selectedIndex];
      el.projectTitleId = project.title;
    });
  
    populateDomByProject();
    return el.proValue;
}



function populateDomByProject() {
    el.projectList.addEventListener("click", (e) => {
      while (el.ongoingToDos.firstChild) {
        el.ongoingToDos.removeChild(el.ongoingToDos.firstChild);
      }
      el.toDos.forEach((toDo) => {
        if (e.target.textContent === toDo.projectTitle) {
          const newToDo = document.createElement("li");
          newToDo.setAttribute("class", "flex justify-between items-center bg-gray-100 px-2 rounded-md mb-4 border-double border-4 outline-none");
          el.ongoingToDos.appendChild(newToDo);
          newToDo.textContent = toDo.title;
          const trashIcon = document.createElement("i");
          trashIcon.setAttribute("class", "fas fa-trash cursor-pointer");
          newToDo.appendChild(trashIcon);
        }
      });
    });
}
  


export { populateDom, populateDomByProject }