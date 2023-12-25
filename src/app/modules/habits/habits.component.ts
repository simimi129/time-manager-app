import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { DateService } from 'services/date-service/date.service';
import { Habit } from './Habit.model';
import { Subscription } from 'rxjs';
import { HabitComponent } from './components/habit/habit.component';
import { HabitsService } from 'services/habits-service/habits.service';

@Component({
  selector: 'app-habits',
  standalone: true,
  imports: [DatePipe, FontAwesomeModule, HabitComponent, CommonModule],
  templateUrl: './habits.component.html',
  styleUrl: './habits.component.css',
})
export class HabitsComponent implements OnInit, OnDestroy {
  private dateService = inject(DateService);
  private habitsService = inject(HabitsService);
  dates!: Date[];
  currentWeek!: Date;

  dateSubscription$: Subscription = new Subscription();
  habitsSubscription$: Subscription = new Subscription();

  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faChevronDown = faChevronDown;

  habits: Habit[] = [];

  ngOnInit(): void {
    this.dateSubscription$ = this.dateService
      .getDatesObservable()
      .subscribe((dates: Date[]) => {
        this.dates = dates;
      });

    this.habitsSubscription$ = this.habitsService
      .getHabitsObservable()
      .subscribe((habits: Habit[]) => {
        this.habits = habits;
      });

    this.currentWeek = this.dates[0];
    console.log(this.currentWeek.toISOString().split('T')[0]);
  }

  ngOnDestroy(): void {
    this.dateSubscription$.unsubscribe();
    this.habitsSubscription$.unsubscribe();
  }
}
