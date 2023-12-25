import { Injectable } from '@angular/core';
import { Habit } from 'modules/habits/Habit.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HabitsService {
  habits$ = new BehaviorSubject<Habit[]>([
    {
      id: 1,
      title: 'Habit 1',
      date: new Date(),
      isDone: true,
      color: 'red',
    },
    {
      id: 2,
      title: 'Habit 2',
      date: new Date(),
      isDone: false,
      color: 'blue',
    },
    {
      id: 3,
      title: 'Habit 3',
      date: new Date(),
      isDone: false,
      color: 'green',
    },
    {
      id: 4,
      title: 'Habit 4',
      date: new Date(),
      isDone: false,
      color: 'yellow',
    },
    {
      id: 5,
      title: 'Habit 5',
      date: new Date(),
      isDone: false,
      color: 'purple',
    },
    {
      id: 6,
      title: 'Habit 6',
      date: new Date(),
      isDone: false,
      color: 'orange',
    },
    {
      id: 7,
      title: 'Habit 7',
      date: new Date(),
      isDone: false,
      color: 'brown',
    },
  ]);

  getHabitsObservable() {
    return this.habits$.asObservable();
  }
}
