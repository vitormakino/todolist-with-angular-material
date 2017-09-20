import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in the constructor',() => {
    let todo = new Todo({
      title: 'teste',
      complete: true
    });

    expect(todo.title).toEqual('teste');
    expect(todo.complete).toEqual(true);
  });
});
