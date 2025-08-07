import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient, private router: Router) {}

  register(user: {email: string, password: string}) {
    return this.http.post(this.apiUrl, user).pipe(
      tap(() => {
        this.router.navigate(['/login']);
      }),
      catchError(error => {
        console.error('Error en registro:', error);
        return of(null);
      })
    );
  }

  login(email: string, password: string) {
  return this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`).pipe(
    tap(users => {
      if (users && users.length > 0) {
        localStorage.setItem('auth_token', 'authenticated');
        localStorage.setItem('user_email', email);
        this.router.navigate(['/cursos']); 
      }
    })
  );
}

  isAuthenticated(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.router.navigate(['/login']);
  }
}