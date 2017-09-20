import { TestBed, inject } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { Todo } from './todo';

describe('TodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService]
    });
  });

  it('should be created', inject([TodoService], (service: TodoService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAll()', () => {   
    it('should return an empty array by default', inject([TodoService], (service: TodoService) => {
      expect(service.getAll()).toEqual([]);
    }));
    
    it('should return all todos', inject([TodoService], (service: TodoService) => {
      let todo1 = new Todo({title: 'Hello 1', complete: false});
      let todo2 = new Todo({title: 'Hello 2', complete: true});
      service.add(todo1);
      service.add(todo2);
       expect(service.getAll()).toEqual([todo1, todo2]);
    }));
    
  });
    
  describe('#save(todo)', () => {  
    it('should automatically assign an incrementing id', inject([TodoService], (service: TodoService) => {
      let todo1 = new Todo({title: 'Hello 1', complete: false});
      let todo2 = new Todo({title: 'Hello 2', complete: true});
      service.add(todo1);
      service.add(todo2);
      expect(service.getById(1)).toEqual(todo1);
      expect(service.getById(2)).toEqual(todo2);
    }));
  });
    
  describe('#deleteById(id)', () => {
    it('should remove todo with the corresponding id', inject([TodoService], (service: TodoService) => {
      let todo1 = new Todo({title: 'Hello 1', complete: false});
      let todo2 = new Todo({title: 'Hello 2', complete: true});
      service.add(todo1);
      service.add(todo2);
      expect(service.getAll()).toEqual([todo1, todo2]);
      service.deleteById(1);
      expect(service.getAll()).toEqual([todo2]);
      service.deleteById(2);
      expect(service.getAll()).toEqual([]);
    }));

    it('should not removing anything if todo with corresponding id is not found', inject([TodoService], (service: TodoService) => {
      let todo1 = new Todo({title: 'Hello 1', complete: false});
      let todo2 = new Todo({title: 'Hello 2', complete: true});
      service.add(todo1);
      service.add(todo2);
      expect(service.getAll()).toEqual([todo1, todo2]);
      service.deleteById(3);
      expect(service.getAll()).toEqual([todo1, todo2]);
    }));

  });
    
  describe('#updateById(id, values)', () => {
     it('should return todo with the corresponding id and updated data', inject([TodoService], (service: TodoService) => {
      let todo = new Todo({title: 'Hello 1', complete: false});
      service.add(todo);
      let updatedTodo = service.updateById(1, {
        title: 'new title'
      });
      expect(updatedTodo.title).toEqual('new title');
    }));

     it('should return null if todo is not found', inject([TodoService], (service: TodoService) => {
      let todo = new Todo({title: 'Hello 1', complete: false});
      service.add(todo);
      let updatedTodo = service.updateById(2, {
        title: 'new title'
      });
      expect(updatedTodo).toEqual(null);
    }));
   });

   describe('#toggleTodoComplete(todo)', () => {
     it('should return the updated todo with inverse complete status', inject([TodoService], (service: TodoService) => {
      let todo = new Todo({title: 'Hello 1', complete: false});
      service.add(todo);
      let updatedTodo = service.toggleTodoComplete(todo);
      expect(updatedTodo.complete).toEqual(true);
      service.toggleTodoComplete(todo);
      expect(updatedTodo.complete).toEqual(false);
    }));
   });
 
});
