import { ToDo, addToDo } from '../src/components/todo-logic';

describe('toDo logic tests', () => {
  const ourToDo = new ToDo();
  test('can create instance of class ToDo', () => {
    expect(ourToDo).toBeInstanceOf(ToDo);
  });

  test('ToDo is Defined', () => {
    expect(ToDo).toBeDefined();
  });
});