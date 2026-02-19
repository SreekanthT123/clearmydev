import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-output-viewer-section',
  templateUrl: './output-viewer-section.component.html',
  imports:[CommonModule],
  styleUrl: './output-viewer-section.component.css',
})
export class OutputViewerSectionComponent  {
  @Input() validationResult: any;
  @Input() aiResult: any;
  @Input() isLoading = false;
  @Output() onFixWithAiEmitter = new EventEmitter<any>();

  onFixWithAI(){
    console.log("event emitted")
    this.onFixWithAiEmitter.emit();
  }
  copied: boolean = false;
  // isFixing: boolean = false;
  // aiResult: any = null;

  // aiFixCount = 0;
  // MAX_AI_FIXES = 5;

  // constructor(private jsonService: JsonService) {}

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['result']) {
  //     // New validation happened → clear old AI output
  //     this.aiResult = null;
  //   }
  // }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    this.copied = true;

    setTimeout(() => {
      this.copied = false;
    }, 1500);
  }

  // onFixWithAI() {
  //   if (!this.result || this.result.valid) return;

  //   this.isFixing = true;
  //   this.aiResult = null;

  //   this.jsonService.fixJson(this.result.originalJson ?? '').subscribe({
  //     next: (res: any) => {
  //       this.aiResult = res;
  //       if (res?.fixed) {
  //         this.aiFixCount++;
  //       }
  //       this.isFixing = false;
  //     },
  //     error: (err) => {
  //       this.aiResult = {
  //         error: 'AI failed to fix the JSON',
  //       };
  //       this.isFixing = false;
  //     },
  //   });
  // }
}
