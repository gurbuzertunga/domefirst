import * as el from './dom-elements';

const store = (() => {
  const getToDoFromStore = () => {
    if (localStorage.getItem("localToDos") === null) {
      el.toDos = [];
    } else {
      el.toDos = JSON.parse(localStorage.getItem("localToDos"));
    }
    return el.toDos;
  };

  const getProjectFromStore = () => {
    if (localStorage.getItem("localProjects") === null) {
      el.projects = [];
    } else {
      el.projects = JSON.parse(localStorage.getItem("localProjects"));
    }
    return el.projects;
  };

  const addToDoToStore = (toDo) => {
    el.toDos = store.getToDoFromStore();
    el.toDos.push(toDo);

    localStorage.setItem("localToDos", JSON.stringify(el.toDos));
  };

  const addProjectToStore = (project) => {
    el.projects = store.getProjectFromStore();
    el.projects.push(project);
    localStorage.setItem("localProjects", JSON.stringify(el.projects));
  };

  const removeToDoFromStore = (title) => {
    el.toDos = store.getToDoFromStore();
    el.toDos.forEach((toDo) => {
      if (toDo.title === title) {
        el.toDos.splice(el.toDos.indexOf(toDo), 1);
      }
    });
    localStorage.setItem("localToDos", JSON.stringify(el.toDos));
  };

  const removeProjectFromStore = (title) => {
    el.projects = store.getProjectFromStore();
    el.projects.forEach((project, index) => {
      if (project.title === title) {
        el.projects.splice(index, 1);
      }
    });
    localStorage.setItem("localProjects", JSON.stringify(el.projects));
  };

  return {
    removeProjectFromStore,
    removeToDoFromStore,
    addProjectToStore,
    addToDoToStore,
    getProjectFromStore,
    getToDoFromStore,
  };
})();

export default store;