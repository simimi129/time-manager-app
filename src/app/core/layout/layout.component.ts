import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from 'core/navigation/navigation.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, NavigationComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
