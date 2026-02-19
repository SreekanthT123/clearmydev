import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { UsageService } from '../usage/usage.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  userToken = signal<string | null>(localStorage.getItem('token'));
  userProfile = signal<any>(null);

  constructor(private http: HttpClient, private usage:UsageService) {}

  login(token: string) {
    localStorage.setItem('token', token);
    this.userToken.set(token);
  }

  logout() {
    console.log("calling logout")
    localStorage.removeItem('token');
    this.userToken.set(null);
    this.userProfile.set(null);
  }

  isLoggedIn() {
    return !!this.userToken();
  }

  loadUser() {
    this.http.get('/auth/me').subscribe({
      next: (user) => {
        console.log('user loaded',user);
        this.userProfile.set(user);
        this.usage.loadUsage();
      },
      error: () => this.logout(),
    });
  }
}
