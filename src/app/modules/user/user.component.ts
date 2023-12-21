import { Component } from '@angular/core';
import { PanelDirective } from 'shared/directives/panel.directive';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  hostDirectives: [PanelDirective],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {}
