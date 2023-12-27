import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { DateService } from 'services/date.service';
import { Habit } from './models/Habit.model';
import { Subscription } from 'rxjs';
import { HabitComponent } from './components/habit/habit.component';
import { HabitsService } from 'services/habits.service';
import { HabitsApiService } from 'services/api-services/habits-api.service';
import { HabitDto } from 'shared/models/api/HabitDto.model';

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
  private habitsApiService = inject(HabitsApiService);

  dateSubscription$: Subscription = new Subscription();
  habitsSubscription$: Subscription = new Subscription();

  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faChevronDown = faChevronDown;

  dates!: Date[];
  currentWeek!: Date;
  currentDate = new Date();

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

  toggleHabitCompletion(habit: Habit, date: Date) {
    habit.toggleDoneOnDate(date);
  }

  addHabit() {
    const habit = new Habit(
      'Habit 3',
      [
        {
          date: new Date().toISOString().split('T')[0],
          isDone: true,
        },
        {
          date: '2023-12-29',
          isDone: true,
        },
      ],
      'purple'
    );
    const habitDto = new HabitDto(habit);
    this.habitsApiService.postHabit(habitDto).subscribe();
  }
}
