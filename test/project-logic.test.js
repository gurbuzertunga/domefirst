import { removeProject, Project } from '../src/components/project-logic';

describe('test project logic', () => {
  const ourProject = new Project('Default');
  test('class Project is defined', () => {
    expect(Project).toBeDefined();
  });

  test('can create instance of Project class', () => {
    expect(ourProject).toBeInstanceOf(Project);
  });

  test('removeProject() is defined', () => {
    expect(removeProject).toBeDefined();
  });
});