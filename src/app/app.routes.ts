import { Routes } from '@angular/router';
import { HabitsComponent } from 'modules/habits/habits.component';
import { TodosComponent } from 'modules/todos/todos.component';
import { UserComponent } from 'modules/user/user.component';

export const routes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { path: 'todos', component: TodosComponent },
  { path: 'habits', component: HabitsComponent },
  { path: 'user', component: UserComponent },
];
