import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CarouselComponent } from '../general/carousel/carousel.component';
import { AuthService } from '../../core/auth/auth.service';
import { UsageService } from '../../core/usage/usage.service';

@Component({
  selector: 'app-layout',
  imports: [RouterLink, CommonModule, CarouselComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  auth = inject(AuthService);
  usage = inject(UsageService);

  constructor(private router: Router) {}
  tryFeature(route: string) {
    if (this.auth.isLoggedIn()) {
      console.log('isLoggedOut', this.auth.isLoggedIn());
      this.router.navigate([route]);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
