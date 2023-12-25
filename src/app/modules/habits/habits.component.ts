import { DatePipe } from '@angular/common';
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

@Component({
  selector: 'app-habits',
  standalone: true,
  imports: [DatePipe, FontAwesomeModule],
  templateUrl: './habits.component.html',
  styleUrl: './habits.component.css',
})
export class HabitsComponent implements OnInit, OnDestroy {
  private dateService = inject(DateService);
  dates!: Date[];
  currentWeek!: Date;

  subscription$: Subscription = new Subscription();

  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faChevronDown = faChevronDown;

  habits: Habit[] = [
    {
      id: 1,
      title: 'Habit 1',
    },
    {
      id: 2,
      title: 'Habit 2',
    },
    {
      id: 3,
      title: 'Habit 3',
    },
    {
      id: 4,
      title: 'Habit 4',
    },
    {
      id: 5,
      title: 'Habit 5',
    },
    {
      id: 6,
      title: 'Habit 6',
    },
    {
      id: 7,
      title: 'Habit 7',
    },
  ];

  ngOnInit(): void {
    this.subscription$ = this.dateService
      .getDatesObservable()
      .subscribe((dates: Date[]) => {
        this.dates = dates;
      });

    this.currentWeek = this.dates[0];
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
