import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-section',
  imports: [CommonModule,FormsModule],
  templateUrl: './input-section.component.html',
  styleUrl: './input-section.component.css'
})
export class InputSectionComponent {
  @Output() jsonValidated = new EventEmitter<any>();

  jsonText:string ='';
  isLoading:boolean=false;

  

  onValidate(){
   
  }

  onClear(){
    this.jsonText='';
    this.jsonValidated.emit(null);
  }
}
