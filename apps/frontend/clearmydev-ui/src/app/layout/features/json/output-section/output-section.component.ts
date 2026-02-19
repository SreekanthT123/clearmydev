import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-output-section',
  imports: [CommonModule],
  templateUrl: './output-section.component.html',
  styleUrl: './output-section.component.css',
})
export class OutputSectionComponent {
  @Input() result: any;
  copied: boolean = false;
  isFixing: boolean = false;
  aiResult: any = null;

  aiFixCount = 0;
  MAX_AI_FIXES = 5;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['result']) {
      // New validation happened → clear old AI output
      this.aiResult = null;
    }
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    this.copied = true;

    setTimeout(() => {
      this.copied = false;
    }, 1500);
  }

  onFixWithAI() {}
}
