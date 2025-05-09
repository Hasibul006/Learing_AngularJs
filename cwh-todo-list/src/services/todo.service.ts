import { inject, Injectable } from '@angular/core';
import { Todo } from '../app/models/todo.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Array<Todo> = []
  private id: number = 0
  private todoSubject = new BehaviorSubject<Todo[]>([])

  todo = this.todoSubject.asObservable()
  http = inject(HttpClient)

  getFromAPI() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
  }

}
