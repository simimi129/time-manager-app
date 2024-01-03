import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ApiService } from './ApiService.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends ApiService {
  private http = inject(HttpClient);

  register(data: any): Observable<any> {
    return this.http.post(this.baseUrl + '/auth/register', data);
  }

  login(data: any): Observable<any> {
    return this.http.post(this.baseUrl + '/auth/login', data);
  }

  logout(): Observable<any> {
    return this.http.get(this.baseUrl + '/auth/logout');
  }
}
