import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-log-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './log-input.component.html',
  styleUrl: './log-input.component.css',
})
export class LogInputComponent {
  @Input() isLoading = false;
  @Output() submitLogs = new EventEmitter<{ logs: string; context: string }>();
  logtext: string = '';
  contexts: any[] = [
    'Backend / API',
    'Frontend',
    'Database',
    'Infrastructure / Server',
    'CI / Build',
    'Other / Not sure',
  ];
  selectedContext: string = 'Backend / API';
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
  onExplain() {
    if (!this.logtext.trim()) return;

    this.submitLogs.emit({
      logs: this.logtext,
      context: this.selectedContext,
    });
  }
  get isValid() {
    return this.logtext.trim().length > 0 && this.logtext.length < 10000;
  }
}
