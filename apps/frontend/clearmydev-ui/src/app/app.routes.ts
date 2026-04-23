import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { LoginOauthComponent } from './layout/auth/login-oauth/login-oauth.component';
import { OauthSuccessComponent } from './layout/auth/oauth-success/oauth-success.component';
import { ShellComponent } from './layout/shell/shell.component';
import { PrivacyPolicyComponent } from './layout/general/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './layout/general/terms-of-use/terms-of-use.component';

export const routes: Routes = [
  // ---------- PUBLIC PAGES (NO AUTH REQUIRED) ----------
  {
    path: 'login',
    component: LoginOauthComponent,
  },
  {
    path: 'oauth-success',
    component: OauthSuccessComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'terms-of-use',
    component: TermsOfUseComponent,
  },

  // ---------- PROTECTED SHELL (REQUIRES AUTH) ----------
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./layout/layout/landing/layout.component').then(c => c.LayoutComponent),
      },
      {
        path: 'landing',
        loadComponent: () => import('./layout/layout/landing/layout.component').then(c => c.LayoutComponent),
      },
      {
        path: 'json',
        loadComponent: () => import('./layout/features/json-new/json.page').then(c => c.JsonNewComponent),
        canActivate: [authGuard],
      },
      {
        path: 'errors',
        loadComponent: () => import('./layout/features/errors/errors.page').then(c => c.ErrorsPage),
        canActivate: [authGuard],
      },
      {
        path: 'logs',
        loadComponent: () => import('./layout/features/logs/log.page').then(c => c.LogsPage),
        canActivate: [authGuard],
      },
      {
        path: 'diffs',
        loadComponent: () => import('./layout/features/diffs/diffs.page').then(c => c.DiffsPage),
        canActivate: [authGuard],
      },
      {
        path: 'incidents',
        loadComponent: () => import('./layout/features/incidents/incident.page').then(c => c.IncidentPage),
        canActivate: [authGuard],
      },
    ],
  },

  // ---------- WILDCARD ROUTE (404) ----------
  {
    path: '**',
    redirectTo: '',
  },
];
