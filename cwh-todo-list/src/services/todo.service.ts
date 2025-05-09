import { Injectable } from '@angular/core';
import { Todo } from '../app/models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = []
  private id: number = 0

  addTodo(title: string) {
    this.todos.push({ id: ++this.id, title, completed: false })
    console.log(this.todos)
  }

  getTodos() {
    return this.todos
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  toggleTodo(id: number) {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })  
  }
  constructor() { }
}
