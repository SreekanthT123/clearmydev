import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-diff-output',
  imports: [CommonModule],
  templateUrl: './diff-output.component.html',
  styleUrl: './diff-output.component.css',
})
export class DiffOutputComponent {
  @Input() result: any = null;
  @Input() isLoading: boolean = false;
  @Input() error: any = '';
}
