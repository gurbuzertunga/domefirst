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
    store.updateToDoInStore = () => myMock();
    expect(myMock).toHaveBeenCalled();
  });
});

