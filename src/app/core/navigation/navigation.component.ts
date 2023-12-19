import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
  faHouse,
  faCalendar,
  faHourglassHalf,
} from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule, CommonModule, NavLinkComponent, FontAwesomeModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  isNavOpen: boolean = false;
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  faHouse = faHouse;
  faCalendar = faCalendar;
  faHourGlassHalf = faHourglassHalf;

  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }
}
