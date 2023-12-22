import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHouse,
  faCalendar,
  faHourglassHalf,
  faUser,
  faRepeat,
} from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { DateService } from 'services/date-service/date.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule, CommonModule, NavLinkComponent, FontAwesomeModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent implements OnInit, OnDestroy {
  private dateService = inject(DateService);

  userName: string = 'no user';
  date!: number;

  faHouse = faHouse;
  faCalendar = faCalendar;
  faHourGlassHalf = faHourglassHalf;
  faUser = faUser;
  faRepeat = faRepeat;

  subscription$: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscription$ = this.dateService
      .getDateObservable()
      .subscribe((date: Date) => {
        this.date = date.getDate();
      });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
