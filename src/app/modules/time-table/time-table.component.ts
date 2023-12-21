import { Component } from '@angular/core';
import { PanelDirective } from 'shared/directives/panel.directive';

@Component({
  selector: 'app-time-table',
  standalone: true,
  imports: [],
  hostDirectives: [PanelDirective],
  templateUrl: './time-table.component.html',
  styleUrl: './time-table.component.css',
})
export class TimeTableComponent {}
