import { populateDom } from '../src/components/populate-dom';

describe('Test PopulateDom', () => {
  let expected = '<option value="House chores">House chores</option>';
  test('returns html options element', () => {
    expect(populateDom()).toBe();
  });
});