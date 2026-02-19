import { Component } from '@angular/core';

@Component({
  selector: 'app-login-oauth',
  imports: [],
  templateUrl: './login-oauth.component.html',
  styleUrl: './login-oauth.component.css',
})
export class LoginOauthComponent {
  loginWithGoogle() {
    window.location.href = 'http://localhost:3000/api/auth/google';
  }
}
