import { populateDom, populateDomByProject } from '../src/components/populate-dom';

describe('Test PopulateDom', () => {
  test('Populate is defined', () => {
    expect(populateDom()).toBeDefined();
  });
  test('Populate returns empty string', () => {
    expect(populateDom()).toBe('');
  })
});

describe('Test populateDomByProject', () => {
  test('populateDomByProject is defined', () => {
    expect(populateDomByProject()).not.toBeDefined();
  });
});