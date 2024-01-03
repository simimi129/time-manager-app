import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HabitDto } from 'shared/models/api/HabitDto.model';
import { ApiService } from './ApiService.interface';

@Injectable({
  providedIn: 'root',
})
export class HabitsApiService extends ApiService {
  private http = inject(HttpClient);

  postHabit(habit: HabitDto): Observable<HabitDto> {
    return this.http.post<HabitDto>(`${this.baseUrl}/habit`, habit);
  }

  getHabits(): Observable<HabitDto[]> {
    return this.http.get<HabitDto[]>(`${this.baseUrl}/habits`);
  }
}
