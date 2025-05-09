import { Component } from '@angular/core';
import { Todo } from '../app/models/todo.model';
import { TodoService } from '../services/todo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-todo',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todos: Todo[] = [];
  newTodoTitle = '';

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos()
  }

  addTodo() {
    if(this.newTodoTitle.trim()) {
      this.todoService.addTodo(this.newTodoTitle)
      this.newTodoTitle = ''
    } 
  }

  toggleTodo(id: number) {
    this.todoService.toggleTodo(id)
  } 

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id)
  }

  keyUpHandler(event: KeyboardEvent) {
    if(event.key) {
      console.log(event.key)
    }
  }

}
