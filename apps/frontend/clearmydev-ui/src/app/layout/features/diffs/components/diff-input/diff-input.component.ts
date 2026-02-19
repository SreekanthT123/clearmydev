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
  selector: 'app-diff-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './diff-input.component.html',
  styleUrl: './diff-input.component.css',
})
export class DiffInputComponent {
  @Input() isLoading = false;
  @Output() submitDiff = new EventEmitter<{
    before: string;
    after: string;
    context: string;
  }>();
  beforetext: string = '';
  aftertext: string = '';
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
    if (!this.beforetext.trim() || !this.aftertext.trim()) return;

    this.submitDiff.emit({
      before: this.beforetext,
      after: this.aftertext,
      context: this.selectedContext,
    });
  }
  get isValid() {
    return (
      this.beforetext.trim().length > 0 &&
      this.beforetext.length < 10000 &&
      this.aftertext.trim().length > 0 &&
      this.aftertext.length < 10000
    );
  }
}
