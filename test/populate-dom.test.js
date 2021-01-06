import { populateDom } from '../src/components/populate-dom';

describe('Test PopulateDom', () => {
  let expected = '<option value="House chores">House chores</option>';
  test('Populate is defined', () => {
    expect(populateDom()).toBeDefined();
  });
});