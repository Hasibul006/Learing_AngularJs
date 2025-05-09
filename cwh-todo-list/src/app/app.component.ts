import { Component, NgModule } from '@angular/core';
import { RouterOutlet , RouterLink } from '@angular/router';
import { TodoComponent } from '../todo/todo.component';
import { CounterComponent } from '../counter/counter.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'cwh-todo-list';
  recieved = 0;
  changedValue: number = 0;


  counterValueChange(value: number) {
    this.recieved = value
    this.changedValue = value - 1
  }
}
