import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  date$ = new BehaviorSubject<Date>(new Date());
  dates$ = new BehaviorSubject<Date[]>([]);

  update() {
    this.date$.next(new Date());
    this.dates$.next(this.getWeekDates());
  }

  getDateObservable() {
    return this.date$.asObservable();
  }

  getDatesObservable() {
    return this.dates$.asObservable();
  }

  getWeekDates() {
    let weekDates: Date[] = [];
    const today = new Date();
    const currentDay = today.getDay();
    const daysToMonday = (currentDay + 6) % 7;
    let currentMonday: Date | number = new Date().setDate(
      today.getDate() - daysToMonday
    );
    currentMonday = new Date(currentMonday);
    weekDates.push(currentMonday);
    for (let i = 1; i < 7; i++) {
      const day = new Date().setDate(currentMonday.getDate() + i);
      weekDates.push(new Date(day));
    }
    return weekDates;
  }
}
