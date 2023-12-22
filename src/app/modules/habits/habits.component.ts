import { Component } from '@angular/core';
import { PanelDirective } from 'shared/directives/panel.directive';

@Component({
  selector: 'app-habits',
  standalone: true,
  imports: [],
  hostDirectives: [PanelDirective],
  templateUrl: './habits.component.html',
  styleUrl: './habits.component.css',
})
export class HabitsComponent {}
