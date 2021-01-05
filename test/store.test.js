// import store from '../src/components/local-storage';
import 'jest-localstorage-mock';

describe('Testing store class', () => {
  // test.ony('getToDoFromStore() returns array', () => {
  //   expect(store.getToDoFromStore()).toBeInstanceOf(Array);
  // });

  // test('getProjectFromStore', () => {
  //   if (localStorage.getItem('localProjects') === null) {
  //     expect(store.getProjectFromStore()).toBe([]);
  //   }
  // });

  test('should save to localStorage', () => {
    const KEY = 'foo',
      VALUE = 'bar';
    //  const toDo = {
    //     KEY: VALUE,
    //   };
    dispatch(action.update(KEY, VALUE));
    expect(localStorage.setItem()).toHaveBeenLastCalledWith(KEY, VALUE);
    expect(localStorage.__STORE__[KEY]).toBe(VALUE);
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
  });
});

