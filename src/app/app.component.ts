import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
  providers:[TodoService]
})
export class AppComponent {
  title = 'app';
  newTodo: Todo = new Todo();

  constructor(private todoService: TodoService){}

  addTodo() {
    this.todoService.add(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoService.deleteById(todo.id);
  }

  get todos() {
    return this.todoService.getAll();
  }
}
