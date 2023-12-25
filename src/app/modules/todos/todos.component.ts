import { Component, OnInit, inject } from '@angular/core';
import { TodosContainerComponent } from 'shared/components/todos-container/todos-container.component';
import { PanelDirective } from 'shared/directives/panel.directive';
import { Todo } from 'shared/models/Todo.model';
import {
  faPlus,
  faArrowLeft,
  faArrowRight,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DateService } from 'services/date-service/date.service';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodosContainerComponent, FontAwesomeModule, DatePipe],
  hostDirectives: [PanelDirective],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  private dateService = inject(DateService);
  date!: Date;
  dates!: Date[];
  currentWeek!: Date;

  subscription$: Subscription = new Subscription();

  faPlus = faPlus;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faChevronDown = faChevronDown;

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

  ngOnInit(): void {
    this.subscription$ = this.dateService
      .getDatesObservable()
      .subscribe((dates: Date[]) => {
        this.dates = dates;
      });

    this.currentWeek = this.dates[0];
  }
}
