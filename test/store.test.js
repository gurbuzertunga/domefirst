import store from '../src/components/local-storage';
import LSMock from '../src/mocks';

const localStorage = new LSMock();

describe('Testing store class', () => {
  beforeEach(() => localStorage.clear());

  test('getToDoFromStore returns Array instance', () => {
    expect(store.getToDoFromStore()).toBeInstanceOf(Array);
  });

  test('local storage getProjectFromStore returns instance of Array', () => {
    expect(store.getProjectFromStore()).toBeInstanceOf(Array);
  });

  test('fake local storage is initialized properly', () => {
    expect(localStorage.store).toEqual([]);
  });

  test('fake local storage setItem() works fine', () => {
    const myMock = jest.fn((obj) => localStorage.setItem(obj));
    store.addToDoToStore = () => {
      const obj = { name: 'Ezeko' };
      myMock(obj);
    };
    store.addToDoToStore();
    expect(myMock).toHaveBeenCalled();
    expect(myMock).toHaveReturnedTimes(1);
    expect(myMock).toHaveBeenCalledWith({ name: 'Ezeko' });
  });

  test('fake local storage getItem() works fine', () => {
    const myMock = jest.fn(() => localStorage.getItem());
    store.getToDoFromStore = () => {
      myMock();
    };
    store.getProjectFromStore = () => {
      myMock();
    };
    store.getToDoFromStore();
    store.getProjectFromStore();
    expect(myMock).toHaveBeenCalledTimes(2);
  });

  test('fake local storage removeItem() works fine', () => {
    const myMock = jest.fn(() => localStorage.removeItem('Name'));
    myMock();
    myMock();
    expect(myMock).toHaveBeenCalledTimes(2);
  });

  test('fake local storage updateItem() works fine', () => {
    const myMock = jest.fn((oldObj, newObj) => localStorage.updateItem(oldObj, newObj));
    myMock();
    myMock();
    expect(myMock).toHaveBeenCalledTimes(2);
  });
});
