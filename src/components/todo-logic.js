import * as el from './dom-elements';
import { Project } from './project-logic';


const store = (() => {
  function getToDoFromStore() {
    if (localStorage.getItem("localToDos") === null) {
      el.toDos = [];
    } else {
      el.toDos = JSON.parse(localStorage.getItem("localToDos"));
    }
    return el.toDos;
  }

  function getProjectFromStore() {
    if (localStorage.getItem("localProjects") === null) {
      el.projects = [];
    } else {
      el.projects = JSON.parse(localStorage.getItem("localProjects"));
    }
    return el.projects;
  }

  function addToDoToStore(toDo) {
    el.toDos = Store.getToDoFromStore();
    el.toDos.push(toDo);

    localStorage.setItem("localToDos", JSON.stringify(el.toDos));
  }

  const addProjectToStore = (project) => {
    el.projects = Store.getProjectFromStore();
    el.projects.push(project);
    localStorage.setItem("localProjects", JSON.stringify(el.projects));
  }

  function removeToDoFromStore(title) {
    el.toDos = Store.getToDoFromStore();
    el.toDos.forEach((toDo) => {
      if (toDo.title === title) {
        el.toDos.splice(el.toDos.indexOf(toDo), 1);
      }
    });
    localStorage.setItem("localToDos", JSON.stringify(el.toDos));
  }

  function removeProjectFromStore(title) {
    el.projects = Store.getProjectFromStore();
    el.projects.forEach((project, index) => {
      if (project.title === title) {
        el.projects.splice(index, 1);
      }
    });
    localStorage.setItem("localProjects", JSON.stringify(el.projects));
  }
  })();




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
  el.projectTitles.options[el.projectTitles.selectedIndex].defaultSelected = true;
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

function populateDom() {
  while (el.ongoingToDos.firstChild) {
    el.ongoingToDos.removeChild(el.ongoingToDos.firstChild);
  }

  Array.from(Store.getToDoFromStore()).forEach((toDo) => {
    const newToDo = document.createElement("li");
    const icons = document.createElement('span');
    icons.setAttribute('class', 'flex justify-between items-center w-12');
    const caret = document.createElement("i");
    caret.setAttribute("class", "fas fa-angle-down fa-2x cursor-pointer");
    const trashIcon = document.createElement("i");
    trashIcon.setAttribute("class", "fas fa-trash cursor-pointer");
    newToDo.textContent = toDo.title;
    newToDo.setAttribute("id", toDo.title);
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
  Array.from(Store.getProjectFromStore()).forEach((project) => {
    el.newProject = document.createElement("li");
    el.formProject = document.createElement("option");
    el.newProject.setAttribute("id", project.title);
    el.newProject.setAttribute("class", "flex justify-between cursor-pointer bg-gray-100 px-2 items-center rounded-md mb-4 border-gray-800 border-double border-4 outline-none");
    el.formProject.setAttribute("value", project.title);
    el.newProject.textContent = project.title;
    if (project.title !== "House Chores") {
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

function showToDoDetails() {
  el.ongoingToDos.addEventListener("click", (e) => {
    const tblRow1 = document.createElement("tr");
    tblRow1.setAttribute('class','bg-white border-4 border-gray-200');
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
            tBodyData.setAttribute('class','px-16 py-2 items-center border border-gray-500');
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
    Store.addToDoToStore(myToDo);
    populateDom();
  //     }
     
    });
  }


function removeToDo() {
  el.ongoingToDos.addEventListener("click", (e) => {
    let b = e.target.parentElement.parentElement.textContent;
    let a = e.target;
    if (a.className === "fas fa-trash cursor-pointer") {
      Store.removeToDoFromStore(b);
      e.target.parentElement.parentElement.remove();
    }
  });
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



export {
  addToDo,
  removeToDo,
  populateDom,
  populateDomByProject,
  showToDoDetails,
  Store
};