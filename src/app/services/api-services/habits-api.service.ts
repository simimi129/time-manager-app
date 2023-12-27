import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HabitDto } from 'shared/models/api/HabitDto.model';

@Injectable({
  providedIn: 'root',
})
export class HabitsApiService {
  private http = inject(HttpClient);
  baseApiUrl = 'http://localhost:8080';

  postHabit(habit: HabitDto): Observable<HabitDto> {
    return this.http.post<HabitDto>(`${this.baseApiUrl}/habit`, habit);
  }
}
