import { Component, inject } from '@angular/core';
import { ExplainIncidentService } from './incident.service';
import { IncidentInputComponent } from './components/incident-input/incident-input.component';
import { IncidentOutputComponent } from './components/incident-output/incident-output.component';
import { IncidentStore } from './incident.store';
import { LayoutStore } from '../../layout/layout-store/layout.store';

@Component({
  standalone: true,
  templateUrl: './incident.page.html',
  imports: [IncidentInputComponent, IncidentOutputComponent],
  providers: [IncidentStore, ExplainIncidentService],
})
export class IncidentPage {
  incidentStore = inject(IncidentStore);
  isLoading = this.incidentStore.loading;
  explanation = this.incidentStore.result;
  errormessage = this.incidentStore.error;
  layoutStore = inject(LayoutStore);
  constructor() {
    this.layoutStore.setShowAppDropdown(true);
    this.layoutStore.setShowButtons(false);
  }
  onSubmit(data: any) {
    console.log('dataaa', data);
    this.incidentStore.explainIncident(data);
  }
  ngOnDestroy() {
    this.layoutStore.setShowAppDropdown(false);
    this.layoutStore.setShowButtons(true);
  }
}
