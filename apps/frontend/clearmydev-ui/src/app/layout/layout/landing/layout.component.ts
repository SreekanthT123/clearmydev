import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CarouselComponent } from '../../general/carousel/carousel.component';
import { AuthService } from '../../../core/auth/auth.service';
import { UsageService } from '../../../core/usage/usage.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { fromEvent, map, startWith } from 'rxjs';
import { FooterLandingPageComponent } from './components/footer-landing-page/footer-landing-page.component';
import { AppDescriptionComponent } from './components/app-description/app-description.component';
import { AppHeroSectionComponent } from './components/app-hero-section/app-hero-section.component';
import { ToolsListComponent } from './components/tools-list/tools-list.component';
import { CustomToastStore } from '../../general/custom-toast/custom-toast.store';
import { CustomToastComponent } from '../../general/custom-toast/custom-toast.component';
@Component({
  standalone: true,
  selector: 'app-layout',
  imports: [
    CommonModule,
    CarouselComponent,
    FooterLandingPageComponent,
    AppDescriptionComponent,
    AppHeroSectionComponent,
    ToolsListComponent,
    CustomToastComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  auth = inject(AuthService);
  toast = inject(CustomToastStore);

  constructor(private router: Router) {}
  tryFeature(route: string) {
    if (this.auth.isLoggedIn()) {
      console.log('isLoggedOut', this.auth.isLoggedIn());
      this.router.navigate([route]);
    } else {
      this.toast.Show('Please log in to access this feature', 'error');
      // this.router.navigate(['/login']);
    }
  }
 scrollToTools() {
  const element = document.getElementById('tools-section');
  const yOffset = -80; // navbar height
  const y = element!.getBoundingClientRect().top + window.scrollY + yOffset;

  window.scrollTo({ top: y, behavior: 'smooth' });
}
}
