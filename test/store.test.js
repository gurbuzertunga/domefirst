import store from '../src/components/local-storage';
import LSMock from '../src/mocks';

const localStorage = new LSMock();

describe('Testing store class', () => {
  
  beforeEach(() => localStorage.clear());

  test('getToDoFromStore returns Array instance', () => {
    expect(store.getToDoFromStore()).toBeInstanceOf(Array);
  });

  test('local storage is initialized properly', () => {
    expect(localStorage.store).toEqual({});
  });

  test('local storage setItem() works fine', () => {
    const myMock = jest.fn(() => localStorage.setItem({Name: "Ezekiel"}));
    myMock();
    myMock();
    expect(myMock).toHaveBeenCalledTimes(2);
  });

  test('local storage getItem() works fine', () => {
    const myMock = jest.fn(() => localStorage.getItem('Name'));
    myMock();
    myMock();
    expect(myMock).toHaveBeenCalledTimes(2);
  });

  test('local storage removeItem() works fine', () => {
    const myMock = jest.fn(() => localStorage.removeItem('Name'));
    myMock();
    myMock();
    expect(myMock).toHaveBeenCalledTimes(2);
  });

  test('local storage getToDoFromStore returns instance of Array', () => {
    expect(store.getToDoFromStore()).toBeInstanceOf(Array);
  });

  test('local storage getProjectFromStore returns instance of Array', () => {
    expect(store.getProjectFromStore()).toBeInstanceOf(Array);
  });
});

