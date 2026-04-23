import { Component, effect, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/auth/auth.service';
import { CustomCursorComponent } from './layout/general/custom-cursor/custom-cursor.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomCursorComponent],
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
