import { Component, effect, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'clearmydev-ui';
  constructor(private auth: AuthService) {
    effect(()=>{
      if (this.auth.isLoggedIn()) {
      console.log('inside load');
      this.auth.loadUser();
    }
    })
    
  }
}
