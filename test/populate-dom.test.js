import { populateDom } from '../src/components/populate-dom';
import * as el from '../src/components/dom-elements';
import store from '../src/components/local-storage';

describe('Test PopulateDom', () => {
  beforeEach(() => {
    const toDo = {
      description: "sample desc",
      dueDate: "2021-01-13",
      priority: "normal",
      title: "House chores",
      toDoTitle: "sample1",
    };
  
    el.toDos.push(toDo);
    store.addToDoToStore(toDo);
    populateDom();
  });

  let expected = '<option value="House chores">House chores</option>';
  test('returns html options element', () => {
    expect(populateDom()).toBe(expected);
  });
});