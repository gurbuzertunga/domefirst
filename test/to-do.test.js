import { toDo } from '../src/components/todo-logic';

describe('toDo logic tests', () => {
  test('toDo class is defined', () => {
    expect(ToDo()).not.toBeUnDefined();
  });
});