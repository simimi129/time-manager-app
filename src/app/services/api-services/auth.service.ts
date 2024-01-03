import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ApiService } from './ApiService.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends ApiService {
  private http = inject(HttpClient);

  register(data: any) {
    this.http.post(this.baseUrl + '/auth/register', data).subscribe();
  }

  login(data: any) {
    this.http.post(this.baseUrl + '/auth/login', data).subscribe();
  }

  logout() {
    this.http.get(this.baseUrl + '/auth/logout').subscribe();
  }
}
