import { Injectable } from '@angular/core';
import { Habit } from 'modules/habits/models/Habit.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HabitsService {
  private habits$ = new BehaviorSubject<Habit[]>([]);

  getHabitsObservable() {
    return this.habits$.asObservable();
  }

  setHabits(habits: Habit[]) {
    this.habits$.next(habits);
  }
}
