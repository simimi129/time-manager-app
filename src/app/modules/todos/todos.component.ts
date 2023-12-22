import { Component } from '@angular/core';
import { PanelDirective } from 'shared/directives/panel.directive';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  hostDirectives: [PanelDirective],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {}
