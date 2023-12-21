import { Component } from '@angular/core';
import { PanelDirective } from 'shared/directives/panel.directive';

@Component({
  selector: 'app-all-time',
  standalone: true,
  imports: [],
  hostDirectives: [PanelDirective],
  templateUrl: './all-time.component.html',
  styleUrl: './all-time.component.css',
})
export class AllTimeComponent {}
