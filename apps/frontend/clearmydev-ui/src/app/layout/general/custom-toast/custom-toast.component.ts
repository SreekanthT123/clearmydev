import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CustomToastStore } from './custom-toast.store';

@Component({
  selector: 'app-custom-toast',
  imports: [CommonModule],
  templateUrl: './custom-toast.component.html',
  styleUrl: './custom-toast.component.css'
})
export class CustomToastComponent {
store = inject(CustomToastStore);
}
