import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { IncidentPage } from './layout/features/incidents/incident.page';
import { DiffsPage } from './layout/features/diffs/diffs.page';
import { ErrorsPage } from './layout/features/errors/errors.page';
import { LogsPage } from './layout/features/logs/log.page';
import { JsonNewComponent } from './layout/features/json-new/json.page';
import { authGuard } from './core/guards/auth.guard';
import { LoginOauthComponent } from './layout/auth/login-oauth/login-oauth.component';
import { OauthSuccessComponent } from './layout/auth/oauth-success/oauth-success.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [],
  },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [],
  },
  { path: 'login', component: LoginOauthComponent },
  { path: 'oauth-success', component: OauthSuccessComponent },
  { path: 'json', canActivate: [authGuard], component: JsonNewComponent },
  { path: 'errors', canActivate: [authGuard], component: ErrorsPage },
  { path: 'logs', canActivate: [authGuard], component: LogsPage },
  { path: 'diffs', canActivate: [authGuard], component: DiffsPage },
  { path: 'incidents', canActivate: [authGuard], component: IncidentPage },
];
