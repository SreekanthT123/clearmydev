import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-incident-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './incident-input.component.html',
  styleUrl: './incident-input.component.css',
})
export class IncidentInputComponent {
  @Input() isLoading = false;
  @Output() submitIncident = new EventEmitter<any>();
  incidentText: string = '';
  logsText: string = '';
  errorsText: string = '';
  recentChangesText: string = '';
  showLogsText:boolean=false;
  showErrorText:boolean=false;
  showChangesText:boolean=false;
  contexts: any[] = [
    'Backend',
    'Frontend',
    'Config',
    'API',
    'Other / Not sure',
  ];
  selectedContext: string = 'Backend';
  isOpen: boolean = false;
  toggle() {
    this.isOpen = !this.isOpen;
  }
  selectContext(fw: string) {
    this.selectedContext = fw;
    this.isOpen = false;
  }
  @HostListener('document:keydown.escape')
  onEsc() {
    this.isOpen = false;
  }
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.context-select')) {
      this.isOpen = false;
    }
  }
  onSubmit() {
    if(!this.incidentText.trim())return;

    this.submitIncident.emit({
      description: this.incidentText,
      logs: this.logsText,
      errors: this.errorsText,
      changes: this.recentChangesText,
      context: this.selectedContext,
    })
  }
  get isValid() {
    return true;
  }
}
