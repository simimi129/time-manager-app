import { Routes } from '@angular/router';
import { LayoutComponent } from 'core/layout/layout.component';
import { AuthComponent } from 'modules/auth/auth.component';
import { LoginComponent } from 'modules/auth/login/login.component';
import { RegisterComponent } from 'modules/auth/register/register.component';
import { HabitsComponent } from 'modules/habits/habits.component';
import { TodosComponent } from 'modules/todos/todos.component';
import { UserComponent } from 'modules/user/user.component';

export const routes: Routes = [
  { path: 'auth', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  {
    path: 'main',
    component: LayoutComponent,
    children: [
      { path: 'habits', component: HabitsComponent },
      { path: 'todos', component: TodosComponent },
      { path: 'user', component: UserComponent },
    ],
  },
  { path: '', redirectTo: 'main/todos', pathMatch: 'full' },
  { path: '**', redirectTo: 'main/todos', pathMatch: 'full' },
];
