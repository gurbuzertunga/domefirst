import * as el from './dom-elements';
import { Project } from './project-logic';
import { populateDom } from './populate-dom';
import store from './local-storage';

const selectChangePri = () => {
  el.toDoPri.addEventListener('change', () => {
    el.priValue = el.toDoPri.options[el.toDoPri.selectedIndex];
    return el.priValue.value;
  });
};

const selectChangePro = () => {
  el.projectTitles.addEventListener('change', () => {
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
  el.ongoingToDos.addEventListener('click', (e) => {
    const tblRow1 = document.createElement('tr');
    tblRow1.setAttribute('class', 'bg-white border-4 border-gray-200');
    if (e.target.className === 'fas fa-angle-down fa-2x cursor-pointer') {
      el.toDos.forEach((toDo) => {
        if (
          e.target.parentElement.parentElement.textContent === toDo.toDoTitle
        ) {
          const tBody = [
            toDo.toDoTitle,
            toDo.description,
            toDo.dueDate,
            toDo.priority,
          ];
          tBody.forEach((prop) => {
            const tBodyData = document.createElement('td');
            tBodyData.setAttribute(
              'class',
              'px-16 py-2 items-center border border-gray-500',
            );
            tBodyData.textContent = prop;
            tblRow1.appendChild(tBodyData);
            el.tblBody.appendChild(tblRow1);
          });
        }
      });

      el.detailsTbl.style.display = 'table';
      e.target.className = 'fas fa-angle-up fa-2x cursor-pointer';
    } else if (e.target.className === 'fas fa-angle-up fa-2x cursor-pointer') {
      el.detailsTbl.style.display = 'none';

      while (el.tblBody.firstChild) {
        el.tblBody.removeChild(el.tblBody.lastChild);
      }

      e.target.className = 'fas fa-angle-down fa-2x cursor-pointer';
    }
  });
}

function addToDo() {
  el.toDoSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if (el.toDos.some((toDo) => toDo.toDoTitle === el.toDoTitle.value)) {
      const alert = document.createElement('div');
      alert.innerHTML = `${el.toDoTitle.value} is already used, type again`;
      alert.setAttribute('id', 'alert');
      alert.setAttribute(
        'class',
        'bg-red-200 relative text-red-800 py-3 px-3 rounded-lg text-xl text-center',
      );
      el.form.insertAdjacentElement('beforeBegin', alert);
      setTimeout(() => document.getElementById('alert').remove(), 2000);
    } else {
      const myToDo = new ToDo(
        el.proValue.value,
        el.toDoTitle.value,
        el.toDoDesc.value,
        el.toDoPri.value,
        el.toDoDate.value,
      );
      el.toDos.push(myToDo);
      store.addToDoToStore(myToDo);
      populateDom();
    }
  });
}

function removeToDo() {
  el.ongoingToDos.addEventListener('click', (e) => {
    const b = e.target.parentElement.parentElement.textContent;
    const a = e.target;
    if (a.className === 'fas fa-trash cursor-pointer') {
      store.removeToDoFromStore(b);
      e.target.parentElement.parentElement.remove();
    }
  });
}

export {
  addToDo,
  removeToDo,
  showToDoDetails,
};
