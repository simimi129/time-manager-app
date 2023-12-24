import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  date$ = new BehaviorSubject<Date>(new Date());

  getDate() {
    return this.date$.getValue();
  }

  update() {
    this.date$.next(new Date());
  }

  getDateObservable() {
    return this.date$.asObservable();
  }

  getWeek() {
    const week = this.date$.getValue().getDate() - 1;
    return week;
  }

  getDatesInRange(start: Date, end: Date) {
    const dates: Date[] = [];
    let currentDate = start;
    while (currentDate <= end) {
      dates.push(currentDate);
      currentDate = new Date(currentDate.getTime());
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  }
}
