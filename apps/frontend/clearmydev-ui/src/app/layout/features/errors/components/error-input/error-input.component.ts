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
  selector: 'app-error-input',
  imports: [FormsModule, CommonModule],
  templateUrl: './error-input.component.html',
  styleUrl: './error-input.component.css',
})
export class ErrorInputComponent {
  errorText: string = '';
  framework: string = '';
  frameworks = [
    'Other',
    'Angular',
    'React',
    'Vue',
    'Svelte',
    'Next.js',
    'Nuxt',
    'Remix',
    'SolidJS',
    'Vanilla JavaScript',
    'Node.js',
    'Express',
    'NestJS',
    'Fastify',
    'Koa',
    'Java',
    'Spring Boot',
    'Python',
    'Django',
    'Flask',
    'FastAPI',
    'Ruby on Rails',
    'PHP',
    'Laravel',
    'Go',
    'Gin',
    'C#',
    '.NET',
  ];

  selectedFramework = 'Other';
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  selectFramework(value: string) {
    this.selectedFramework = value;
    this.isOpen = false;
  }
  @HostListener('document:keydown.escape')
  onEsc() {
    this.isOpen = false;
  }
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.framework-select')) {
      this.isOpen = false;
    }
  }
  @Input() isLoading = false;

  @Output() explain = new EventEmitter<{
    errorText: string;
    framework: string;
  }>();

  onExplain() {
    this.explain.emit({ errorText: this.errorText, framework: this.selectedFramework });
  }
}
