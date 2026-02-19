import { Component } from '@angular/core';
import { InputSectionComponent } from './input-section/input-section.component';
import { OutputSectionComponent } from './output-section/output-section.component';

@Component({
  selector: 'app-json',
  imports: [InputSectionComponent,OutputSectionComponent],
  templateUrl: './json.component.html',
  styleUrl: './json.component.css'
})
export class JsonComponent {

}
