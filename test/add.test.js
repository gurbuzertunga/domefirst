import add from '../src/add';

describe('testing add()', () => {
  test('adds two number', () => {
    expect(add(1, 2)).toBe(3);
  });
});