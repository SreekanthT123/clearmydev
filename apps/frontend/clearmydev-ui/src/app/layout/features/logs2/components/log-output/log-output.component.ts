import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-log-output',
  imports: [CommonModule],
  templateUrl: './log-output.component.html',
  styleUrl: './log-output.component.css'
})
export class LogOutputComponent {
  @Input() result:any = null;
  @Input() isLoading:boolean = false;
  @Input() error:any = '';
}
