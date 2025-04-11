import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3030/auth';
  private headers = new HttpHeaders({
    'x-api-key': "I'M_A_FRONTEND_DEVELOPER_AND_I_WANT_TO_JOIN_THE_TEAM"
  });

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password }, { headers: this.headers });
  }

  register(name: string, lastname: string, email: string, password: string, repassword: string): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/register`,
      { name, lastname, email, password, repassword },
      { headers: this.headers }
    );
  }
}
