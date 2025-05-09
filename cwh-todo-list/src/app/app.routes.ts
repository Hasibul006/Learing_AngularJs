import { Routes } from '@angular/router';
import { TodoComponent } from '../todo/todo.component';
import { CounterComponent } from '../counter/counter.component';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('../home/home.component').then((c) => c.HomeComponent);
        }
    },
    {
        path: 'todo',
        loadComponent: () => {
            return import('../todo/todo.component').then((c) => c.TodoComponent);
        }
    },
    {
        path: 'counter',
        loadComponent: () => {
            return import('../counter/counter.component').then((c) => c.CounterComponent);
        }
    }
];
