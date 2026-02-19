import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-incident-output',
  imports: [CommonModule],
  templateUrl: './incident-output.component.html',
  styleUrl: './incident-output.component.css'
})
export class IncidentOutputComponent {
@Input() result: any = null;
  @Input() isLoading: boolean = false;
  @Input() error: any = '';
}
