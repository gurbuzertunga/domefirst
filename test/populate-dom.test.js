import { populateDom } from '../src/components/populate-dom';

describe('Test PopulateDom', () => {
  const expected = '<option value="House chores">House chores</option>';
  xtest('populateDom() returns correct value', () => {
    expect(populateDom()).toEqual(expected);
  });

  test('populateDom() to be defined', () => {
    expect(populateDom()).toBeDefined();
  });
});