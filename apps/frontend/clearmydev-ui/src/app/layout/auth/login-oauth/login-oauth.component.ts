import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login-oauth',
  imports: [],
  templateUrl: './login-oauth.component.html',
  styleUrl: './login-oauth.component.css',
})
export class LoginOauthComponent {
 loginWithGoogle() {
    window.location.href = environment.authUrl;
  }
}
