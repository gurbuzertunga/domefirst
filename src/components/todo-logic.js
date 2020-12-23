import * as el from './dom-elements';
import { Project } from './project-logic';
import { populateDom } from './populate-dom';
import store from './local-storage';




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

class ToDo extends Project {
  constructor(title, toDoTitle, description, priority, dueDate) {
    super(title);
    this.toDoTitle = toDoTitle;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
  }
}

function showToDoDetails() {
  el.ongoingToDos.addEventListener("click", (e) => {
    const tblRow1 = document.createElement("tr");
    tblRow1.setAttribute("class", "bg-white border-4 border-gray-200");
    if (e.target.className === "fas fa-angle-down fa-2x cursor-pointer") {
      el.toDos.forEach((toDo) => {
        if (e.target.parentElement.parentElement.textContent === toDo.toDoTitle) {
          const tBody = [
            toDo.toDoTitle,
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
    let myToDo = new ToDo (
      el.proValue.value,
      el.toDoTitle.value,
      el.toDoDesc.value,
      el.priValue.value,
      el.toDoDate.value,
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