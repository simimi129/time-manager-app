import { Injectable } from '@angular/core';
import { Habit } from 'modules/habits/models/Habit.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HabitsService {
  private habits$ = new BehaviorSubject<Habit[]>([
    new Habit(
      'Habit 1',
      [
        {
          date: new Date().toISOString().split('T')[0],
          isDone: true,
        },
        {
          date: '2023-12-27',
          isDone: true,
        },
      ],
      'red'
    ),
    new Habit(
      'Habit 2',
      [
        {
          date: new Date().toISOString().split('T')[0],
          isDone: true,
        },
        {
          date: '2023-12-28',
          isDone: true,
        },
      ],
      'blue'
    ),
  ]);

  getHabitsObservable() {
    return this.habits$.asObservable();
  }

  setHabits(habits: Habit[]) {
    this.habits$.next(habits);
  }
}
