import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../../core/auth/auth.service';
import { UsageService } from '../../../core/usage/usage.service';
import { filter, fromEvent, map, startWith } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutStore } from '../layout-store/layout.store';

@Component({
  selector: 'app-topnavbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './topnavbar.component.html',
  styleUrl: './topnavbar.component.css',
})
export class TopnavbarComponent {
  auth = inject(AuthService);
  usage = inject(UsageService);
  layoutStore = inject(LayoutStore);
  showAppDrpdown = computed(() => this.layoutStore.showAppDropdown());
  showLogoAlways = computed(() => this.layoutStore.showLogoAlways());
  showButtons = computed(() => this.layoutStore.showButtons());
  isOpen = false;
  isOpenMobile = false;
  isApplistOpen = false;
  selectedApp: any = { app: 'errors', displayValue: 'ExplainMyError' };

  private router = inject(Router);
  private route = inject(ActivatedRoute);

  selectApp(value: string) {
    this.selectedApp = value;
    this.isApplistOpen = false;
  }

  applist: any[] = [
    { app: 'errors', displayValue: 'ExplainMyError' },
    { app: 'logs', displayValue: 'ExplainMyLog' },
    { app: 'diffs', displayValue: 'ExplainMyDiff' },
    { app: 'incidents', displayValue: 'ExplainMyIncident' },
    { app: 'json', displayValue: 'FixMyJson' },
  ];

  toggle() {
    this.isOpen = !this.isOpen;
  }
  toggleMenuMobile() {
    this.isOpenMobile = !this.isOpenMobile;
  }
  toggleapplist() {
    this.isApplistOpen = !this.isApplistOpen;
  }
  private scroll$ = fromEvent(window, 'scroll').pipe(
    map(() => window.scrollY),
    startWith(0),
  );

  scrollY = toSignal(this.scroll$, { initialValue: 0 });

  // 👇 when to show logo
  showLogo = computed(() => {
    return this.scrollY() > 100;
  });
  login(){
    window.location.href = 'http://localhost:3000/api/auth/google';
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/landing']);
  }
}
