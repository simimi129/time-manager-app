import { Component } from '@angular/core';
import { TodosContainerComponent } from 'shared/components/todos-container/todos-container.component';
import { PanelDirective } from 'shared/directives/panel.directive';
import { Todo } from 'shared/models/Todo.model';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodosContainerComponent, FontAwesomeModule],
  hostDirectives: [PanelDirective],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  faPlus = faPlus;

  todosToday: Todo[] = [
    {
      id: 1,
      title: 'Todo 1',
    },
    {
      id: 2,
      title: 'Todo 2',
    },
    {
      id: 3,
      title: 'Todo 3',
    },
  ];

  todosThisWeek: Todo[] = [
    {
      id: 1,
      title: 'Todo 1',
    },
    {
      id: 2,
      title: 'Todo 2',
    },
    {
      id: 3,
      title: 'Todo 3',
    },
    {
      id: 4,
      title: 'Todo 4',
    },
  ];
}
