import { Component, inject } from '@angular/core';
import { ExplainIncidentService } from './incident.service';
import { IncidentInputComponent } from './components/incident-input/incident-input.component';
import { IncidentOutputComponent } from './components/incident-output/incident-output.component';
import { IncidentStore } from './incident.store';

@Component({
  standalone: true,
  templateUrl: './incident.page.html',
  imports: [IncidentInputComponent, IncidentOutputComponent],
  providers:[IncidentStore,ExplainIncidentService]
})
export class IncidentPage {
  incidentStore= inject(IncidentStore);
  isLoading= this.incidentStore.loading;
  explanation = this.incidentStore.result;
  errormessage = this.incidentStore.error;
  onSubmit(data: any) {
    console.log("dataaa",data)
   this.incidentStore.explainIncident(data);
  }
}
