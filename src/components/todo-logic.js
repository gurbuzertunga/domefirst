let toDos = [];
let projects = [];

const newProjectField = document.getElementById("addProject");
const newProjectConfirm = document.getElementById("addProjectConfirm");
const projectList = document.getElementById("project-list");
const projectTitles = document.getElementById("project-titles");
const toDoTitle = document.getElementById("title");
const toDoDesc = document.getElementById("description");
const toDoPri = document.getElementById("priority");
const toDoDate = document.getElementById("date");
const toDoSubmit = document.getElementById("submit-todo");

let myToDos = [];
let myProjects = [];
let newProject;
let formProject;
let proValue = "";

const detailsTbl = document.createElement("table");
const tblHead = document.createElement("thead");
const thRow = document.createElement("tr");
const detailsArr = ["Title", "Description", "DueDate", "Priority"];
detailsArr.forEach((heading) => {
  const thData = document.createElement("th");
  thData.textContent = heading;
  thRow.appendChild(thData);
});
const tblBody = document.createElement("tbody");
document.body.appendChild(detailsTbl);
tblHead.appendChild(thRow);
detailsTbl.appendChild(tblHead);
detailsTbl.appendChild(tblBody);
detailsTbl.style.display = "none";

class Store {
  static getToDoFromStore() {
    if (localStorage.getItem("localToDos") === null) {
      toDos = [];
    } else {
      toDos = JSON.parse(localStorage.getItem("localToDos"));
    }
    return toDos;
  }

  static getProjectFromStore() {
    if (localStorage.getItem("localProjects") === null) {
      projects = [];
    } else {
      projects = JSON.parse(localStorage.getItem("localProjects"));
    }
    return projects;
  }

  static addToDoToStore(toDo) {
    toDos = Store.getToDoFromStore();
    toDos.push(toDo);

    localStorage.setItem("localToDos", JSON.stringify(toDos));
  }

  static addProjectToStore(project) {
    projects = Store.getProjectFromStore();
    projects.push(project);
    localStorage.setItem("localProjects", JSON.stringify(projects));
  }

  static removeToDoFromStore(title) {
    toDos = Store.getToDoFromStore();
    toDos.forEach((toDo) => {
      if (toDo.title === title) {
        toDos.splice(toDos.indexOf(toDo), 1);
      }
    });
    localStorage.setItem("localToDos", JSON.stringify(toDos));
  }

  static removeProjectFromStore(title) {
    projects = Store.getProjectFromStore();
    projects.forEach((project, index) => {
      if (project.title === title) {
        projects.splice(index, 1);
      }
    });
    localStorage.setItem("localProjects", JSON.stringify(projects));
  }
}

class Project {
  constructor(title) {
    this.title = title;
  }
  static addToDoItem(title, description, priority, dueDate, projectTitle) {
    return { title, description, priority, dueDate, projectTitle };
  }
}
let projectTitleId = "";

if (localStorage.getItem("localProjects") === null) {
  const myDefaultProject = new Project("House Chores");
  projects.push(myDefaultProject);

  Store.addProjectToStore(myDefaultProject);

  newProject = document.createElement("li");
  formProject = document.createElement("option");
  formProject.setAttribute("value", projects[0].title);
  newProject.textContent = projects[0].title;
  formProject.textContent = projects[0].title;
  projectList.appendChild(newProject);
  projectTitles.appendChild(formProject);
  projectTitleId = projects[0].title;
  projectTitles.options[projectTitles.selectedIndex].defaultSelected = true;
}

while (projectList.firstChild) {
  projectList.removeChild(projectList.firstChild);
}

const ongoingToDos = document.getElementById("ongoing-todos");
let priValue = toDoPri.options[toDoPri.selectedIndex];

const selectChangePri = () => {
  toDoPri.addEventListener("change", () => {
    priValue = toDoPri.options[toDoPri.selectedIndex];
    return priValue.value;
  });
};

const selectChangePro = () => {
  projectTitles.addEventListener("change", () => {
    proValue = projectTitles.options[projectTitles.selectedIndex];
    return proValue.value;
  });
};

selectChangePri();
selectChangePro();

function populateDom() {
  while (ongoingToDos.firstChild) {
    ongoingToDos.removeChild(ongoingToDos.firstChild);
  }

  Array.from(Store.getToDoFromStore()).forEach((toDo) => {
    const newToDo = document.createElement("li");
    const caret = document.createElement("i");
    caret.setAttribute("class", "fas fa-angle-down fa-2x");
    newToDo.textContent = toDo.title;
    newToDo.setAttribute("id", toDo.title);
    newToDo.setAttribute("class", "flex justify-between");
    newToDo.appendChild(caret);
    ongoingToDos.appendChild(newToDo);
    const trashIcon = document.createElement("i");
    trashIcon.setAttribute("class", "fas fa-trash");
    newToDo.appendChild(trashIcon);
  });

  while (projectTitles.firstChild) {
    projectTitles.removeChild(projectTitles.firstChild);
  }
  while (projectList.firstChild) {
    projectList.removeChild(projectList.firstChild);
  }
  Array.from(Store.getProjectFromStore()).forEach((project) => {
    newProject = document.createElement("li");
    formProject = document.createElement("option");
    newProject.setAttribute("id", project.title);
    formProject.setAttribute("value", project.title);
    newProject.textContent = project.title;
    formProject.textContent = project.title;
    if (project.title !== "House Chores") {
      const trashIcon = document.createElement("i");
      trashIcon.setAttribute("class", "fas fa-trash");
      newProject.appendChild(trashIcon);
    }
    projectList.appendChild(newProject);
    projectTitles.appendChild(formProject);
    proValue = projectTitles.options[projectTitles.selectedIndex];
    projectTitleId = project.title;
  });

  populateDomByProject();
  return proValue;
}

function showToDoDetails() {
  ongoingToDos.addEventListener("click", (e) => {
    const tblRow1 = document.createElement("tr");

    if (e.target.className === "fas fa-angle-down fa-2x") {
      toDos.forEach((toDo) => {
        if (e.target.parentElement.textContent === toDo.title) {
          const tBody = [
            toDo.title,
            toDo.description,
            toDo.dueDate,
            toDo.priority,
          ];
          tBody.forEach((prop) => {
            const tBodyData = document.createElement("td");
            tBodyData.textContent = prop;
            tblRow1.appendChild(tBodyData);
            tblBody.appendChild(tblRow1);
          });
        }
      });

      detailsTbl.style.display = "block";
      e.target.className = "fas fa-angle-up fa-2x";
    } else if (e.target.className === "fas fa-angle-up fa-2x") {
      detailsTbl.style.display = "none";

      while (tblBody.firstChild) {
        tblBody.removeChild(tblBody.lastChild);
      }

      e.target.className = "fas fa-angle-down fa-2x";
    }
  });
}

function addToDo() {
  toDoSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    toDos.forEach((toDo) => {
      if (toDo.title === toDoTitle.value) {
        console.log("Title is used already");
      } 
        
    });
    let myToDo = Project.addToDoItem(
      toDoTitle.value,
      toDoDesc.value,
      priValue.value,
      toDoDate.value,
      proValue.value
    );
    toDos.push(myToDo);
    Store.addToDoToStore(myToDo);
    populateDom();
  //     }
     
    });
  }


function removeToDo() {
  ongoingToDos.addEventListener("click", (e) => {
    let b = e.target.parentElement.textContent;
    let a = e.target;
    if (a.className === "fas fa-trash") {
      Store.removeToDoFromStore(b);
      e.target.parentElement.remove();
    }
  });
}

function newProjects() {
  newProjectConfirm.addEventListener("click", () => {
    let myNewProject = new Project(newProjectField.value);
    projects.push(myNewProject);
    Store.addProjectToStore(myNewProject);
    populateDom();
    populateDomByProject();
  });
}

function populateDomByProject() {
  projectList.addEventListener("click", (e) => {
    while (ongoingToDos.firstChild) {
      ongoingToDos.removeChild(ongoingToDos.firstChild);
    }
    toDos.forEach((toDo) => {
      if (e.target.textContent === toDo.projectTitle) {
        const newToDo = document.createElement("li");
        ongoingToDos.appendChild(newToDo);
        newToDo.textContent = toDo.title;
        const trashIcon = document.createElement("i");
        trashIcon.setAttribute("class", "fas fa-trash");
        newToDo.appendChild(trashIcon);
      }
    });
  });
}

function removeProject() {
  projectList.addEventListener("click", (e) => {
    if (e.target.className === "fas fa-trash") {
      Store.removeProjectFromStore(e.target.parentElement.textContent);
      Store.getToDoFromStore().forEach((toDo) => {
        if (e.target.parentElement.textContent === toDo.projectTitle) {
          Store.removeToDoFromStore(toDo.title);
          document.getElementById(toDo.title).remove();
        }
      });
      e.target.parentElement.remove();
      projectTitles.childNodes.forEach((option) => {
        if (option.textContent === e.target.parentElement.textContent) {
          option.remove();
        }
      });
    }
  });
}

export {
  newProjects,
  addToDo,
  removeToDo,
  removeProject,
  populateDom,
  populateDomByProject,
  showToDoDetails,
};
