import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { IncidentPage } from './layout/features/incidents/incident.page';
import { JsonPage } from './layout/features/json/json.page';
import { DiffsPage } from './layout/features/diffs/diffs.page';
import { ErrorsPage } from './layout/features/errors/errors.page';
import { LogsPage } from './layout/features/logs/logs.page';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [],
  },
  { path: 'json', component: JsonPage },
  { path: 'errors', component: ErrorsPage },
  { path: 'logs', component: LogsPage },
  { path: 'diffs', component: DiffsPage },
  { path: 'incidents', component: IncidentPage },
];
