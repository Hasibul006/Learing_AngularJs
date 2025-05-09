import { Component, OnChanges, OnInit } from '@angular/core';
import { Todo } from '../app/models/todo.model';
import { TodoService } from '../services/todo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';


@Component({
  selector: 'app-todo',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})

export class TodoComponent implements OnInit {
  todos: Array<Todo> = [];
  todoService = inject(TodoService)
  newUserId = 0
  newTodoTitle = ''
  newTodoCompleted = false
  id = 200

  //todoService = inject(TodoService)
  ngOnInit(): void {
      this.todoService.getFromAPI().subscribe(todos => {
        this.todos = todos
      })
  }

  addTodo() {
    this.id++
    this.todos.push({
      userId: this.newUserId,
      id: this.id,
      title: this.newTodoTitle,
      completed: this.newTodoCompleted
    })
  }


  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(todo => todo.id !== todo.id)
  } 

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed
  }

}
