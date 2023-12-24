import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
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
  animations: [
    trigger('expandCollapse', [
      state('closed', style({ height: '0', overflow: 'hidden' })),
      state('open', style({ height: '*', overflow: 'hidden' })),
      transition('closed <=> open', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class TodosContainerComponent {
  @Input({ required: true }) title!: string;
  @Input() todos: Todo[] = [];

  isOpen: boolean = false;
  state: 'closed' | 'open' = 'closed';

  toggleOpen() {
    this.isOpen = !this.isOpen;
    this.state = this.isOpen ? 'open' : 'closed';
  }

  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;
}
