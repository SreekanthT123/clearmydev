import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explanation-output',
  imports: [CommonModule],
  templateUrl: './explanation-output.component.html',
  styleUrl: './explanation-output.component.css'
})
export class ExplanationOutputComponent {
  @Input() isLoading = false;
  @Input() explanation :any = null;
  @Input() errorMessage:any = '';
}
