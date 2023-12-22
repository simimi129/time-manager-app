import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Todo } from 'shared/models/Todo.model';

@Component({
  selector: 'app-todos-container',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './todos-container.component.html',
  styleUrl: './todos-container.component.css',
})
export class TodosContainerComponent {
  @Input({ required: true }) title!: string;
  @Input() todos: Todo[] = [];

  isOpen: boolean = false;

  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;
}
