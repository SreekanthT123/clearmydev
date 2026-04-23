import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { UsageService } from '../usage/usage.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  userToken = signal<string | null>(localStorage.getItem('token'));
  userProfile = signal<any>(null);
  userLoggingOut = signal<boolean>(false);

  constructor(
    private http: HttpClient,
    private usage: UsageService,
  ) {}

  login(token: string) {
    localStorage.setItem('token', token);
    this.userToken.set(token);
  }

  logout() {
    this.userLoggingOut.set(true);
    console.log('calling logout');
    localStorage.removeItem('token');
    this.userToken.set(null);
    this.userProfile.set(null);
    setTimeout(() => {
      this.userLoggingOut.set(false);
    }, 3000);
  }

  isLoggedIn() {
    return !!this.userToken();
  }

  loadUser() {
    this.http.get('/auth/me').subscribe({
      next: (user) => {
        console.log('user loaded', user);
        this.userProfile.set(user);
        this.usage.loadUsage();
      },
      error: () => this.logout(),
    });
  }
}
