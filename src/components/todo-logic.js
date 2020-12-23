import * as el from './dom-elements';
import { Project } from './project-logic';
import { populateDom } from './populate-dom';
import store from './local-storage';

if (localStorage.getItem("localProjects") === null) {
  const myDefaultProject = new Project("House Chores");
  el.projects.push(myDefaultProject);

  store.addProjectToStore(myDefaultProject);

  el.newProject = document.createElement("li");
  el.formProject = document.createElement("option");
  el.formProject.setAttribute("value", el.projects[0].title);
  el.newProject.textContent = el.projects[0].title;
  el.formProject.textContent = el.projects[0].title;
  el.projectList.appendChild(el.newProject);
  el.projectTitles.appendChild(el.formProject);
  el.projectTitleId = el.projects[0].title;
  el.projectTitles.options[
    el.projectTitles.selectedIndex
  ].defaultSelected = true;
}

while (el.projectList.firstChild) {
  el.projectList.removeChild(el.projectList.firstChild);
}

const selectChangePri = () => {
  el.toDoPri.addEventListener("change", () => {
    el.priValue = el.toDoPri.options[el.toDoPri.selectedIndex];
    return el.priValue.value;
  });
};

const selectChangePro = () => {
  el.projectTitles.addEventListener("change", () => {
    el.proValue = el.projectTitles.options[el.projectTitles.selectedIndex];
    return el.proValue.value;
  });
};

selectChangePri();
selectChangePro();

function showToDoDetails() {
  el.ongoingToDos.addEventListener("click", (e) => {
    const tblRow1 = document.createElement("tr");
    tblRow1.setAttribute("class", "bg-white border-4 border-gray-200");
    if (e.target.className === "fas fa-angle-down fa-2x cursor-pointer") {
      el.toDos.forEach((toDo) => {
        if (e.target.parentElement.parentElement.textContent === toDo.title) {
          const tBody = [
            toDo.title,
            toDo.description,
            toDo.dueDate,
            toDo.priority,
          ];
          tBody.forEach((prop) => {
            const tBodyData = document.createElement("td");
            tBodyData.setAttribute(
              "class",
              "px-16 py-2 items-center border border-gray-500"
            );
            tBodyData.textContent = prop;
            tblRow1.appendChild(tBodyData);
            el.tblBody.appendChild(tblRow1);
          });
        }
      });

      el.detailsTbl.style.display = "table";
      e.target.className = "fas fa-angle-up fa-2x cursor-pointer";
    } else if (e.target.className === "fas fa-angle-up fa-2x cursor-pointer") {
      el.detailsTbl.style.display = "none";

      while (el.tblBody.firstChild) {
        el.tblBody.removeChild(el.tblBody.lastChild);
      }

      e.target.className = "fas fa-angle-down fa-2x cursor-pointer";
    }
  });
}

function addToDo() {
  el.toDoSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    el.toDos.forEach((toDo) => {
      if (toDo.title === el.toDoTitle.value) {
        console.log("Title is used already");
      }
    });
    let myToDo = Project.addToDoItem(
      el.toDoTitle.value,
      el.toDoDesc.value,
      el.priValue.value,
      el.toDoDate.value,
      el.proValue.value
    );
    el.toDos.push(myToDo);
    store.addToDoToStore(myToDo);
    populateDom();
  });
}

function removeToDo() {
  el.ongoingToDos.addEventListener("click", (e) => {
    let b = e.target.parentElement.parentElement.textContent;
    let a = e.target;
    if (a.className === "fas fa-trash cursor-pointer") {
      store.removeToDoFromStore(b);
      e.target.parentElement.parentElement.remove();
    }
  });
}

export { addToDo, removeToDo, showToDoDetails };