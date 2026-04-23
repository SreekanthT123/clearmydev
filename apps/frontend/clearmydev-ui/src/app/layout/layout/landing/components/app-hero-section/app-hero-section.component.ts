import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-app-hero-section',
  imports: [],
  templateUrl: './app-hero-section.component.html',
  styleUrl: './app-hero-section.component.css'
})
export class AppHeroSectionComponent {
@Output() tryTool = new EventEmitter<void>();

onTryToolClick() {
  this.tryTool.emit();
}
}
