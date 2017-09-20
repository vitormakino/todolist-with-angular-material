import { Injectable } from '@angular/core';

import { Todo } from './todo';


@Injectable()
export class TodoService {

  list: Todo[] = [];
  lastId: number = 0;

  constructor() { }

  //Simulate GET /todos/:id
  getById(id: number): Todo {
    return this.list
      .filter(todo => todo.id === id)
      .pop();
  }

  //Simulate POST /todos
  add(todo: Todo): Todo {
    if(!todo.id) {
      todo.id = ++this.lastId;
    }
    this.list.push(todo);
    return todo;
  }

  //Simulate DELETE /todos/:id
  deleteById(id: number) {
    this.list = this.list.filter(todo => todo.id !== id);
  }

  //Simulate UPDATE /todos/:id
  updateById(id: number, values: Object = {}): Todo {
    let todo = this.getById(id);
    if(!todo) {
      return null;
    }
    Object.assign(todo,values);
    return todo;
  }

  // Simulate GET /todos
  getAll(): Todo[] {
    return this.list;
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}
