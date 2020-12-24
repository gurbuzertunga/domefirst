import * as el from './dom-elements';

const store = (() => {
  const getToDoFromStore = () => {
    if (localStorage.getItem('localToDos') === null) {
      el.myToDos = [];
    } else {
      el.myToDos = JSON.parse(localStorage.getItem('localToDos'));
    }
    return el.myToDos;
  };

  const getProjectFromStore = () => {
    if (localStorage.getItem('localProjects') === null) {
      el.myProjects = [];
    } else {
      el.myProjects = JSON.parse(localStorage.getItem('localProjects'));
    }
    return el.myProjects;
  };

  const addToDoToStore = (toDo) => {
    el.myToDos = store.getToDoFromStore();
    el.myToDos.push(toDo);

    localStorage.setItem('localToDos', JSON.stringify(el.myToDos));
  };

  const addProjectToStore = (project) => {
    el.myProjects = store.getProjectFromStore();
    el.myProjects.push(project);
    localStorage.setItem('localProjects', JSON.stringify(el.myProjects));
  };

  const removeToDoFromStore = (title) => {
    el.myToDos = store.getToDoFromStore();
    el.myToDos.forEach((toDo) => {
      if (toDo.toDoTitle === title) {
        el.myToDos.splice(el.myToDos.indexOf(toDo), 1);
      }
    });
    localStorage.setItem('localToDos', JSON.stringify(el.myToDos));
  };

  const removeProjectFromStore = (title) => {
    el.myProjects = store.getProjectFromStore();
    el.myProjects.forEach((project, index) => {
      if (project.title === title) {
        el.myProjects.splice(index, 1);
      }
    });
    localStorage.setItem('localProjects', JSON.stringify(el.myProjects));
  };

  const updateToDoInStore = (newToDo, oldToDo) => {
    el.myToDos = store.getToDoFromStore();
    el.myToDos.forEach((toDo, index) => {
      if (toDo.toDoTitle === oldToDo.toDoTitle) {
        el.myToDos.splice(index, 1, newToDo);
      }
    });

    localStorage.setItem('localToDos', JSON.stringify(el.myToDos));
  };

  return {
    removeProjectFromStore,
    removeToDoFromStore,
    addProjectToStore,
    addToDoToStore,
    getProjectFromStore,
    getToDoFromStore,
    updateToDoInStore,
  };
})();

export default store;
