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
}
