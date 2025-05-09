import { Injectable } from '@angular/core';
import { Todo } from '../app/models/todo.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = []
  private id: number = 0
  private todoSubject = new BehaviorSubject<Todo[]>([])

  todo = this.todoSubject.asObservable()

  addTodo(title: string) {
    this.todos.push({ id: ++this.id, title, completed: false })
    console.log(this.todos)
  }

  getTodos() {
    return this.todos
  }

  deleteTodo(id: number) {
    console.log(id)
    this.todos = this.todos.filter(todo => todo.id !== id)
    this.todos.length
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
