import { Component } from '@angular/core';
import { TwoColPageComponent } from 'shared/components/two-col-page/two-col-page.component';
import { PanelDirective } from 'shared/directives/panel.directive';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TwoColPageComponent],
  hostDirectives: [PanelDirective],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {}
