import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-editor-section',
  imports:[FormsModule],
  templateUrl: './input-editor-section.component.html',
  styleUrl: './input-editor-section.component.css'
})
export class InputEditorSectionComponent {
  @Output() validateJson = new EventEmitter<any>();
  @Output() reset = new EventEmitter<any>();
  @Input() isLoading= false;
  jsonText:string ='';

  onValidate(){
    this.validateJson.emit(this.jsonText);
    // if(!this.jsonText.trim()){
    //   this.jsonValidated.emit({
    //     valid: false,
    //     error: 'Please paste JSON before validating.'
    //   });
    //   return;
    // }
    // this.isLoading = true;
    // this.jsonValidated.emit(null);
    // this.jsonService.validateJson(this.jsonText).subscribe({
    //   next:(res:any)=>{
    //     this.jsonValidated.emit({
    //       ...res,
    //       originalJson: this.jsonText
    //     });
    //     this.isLoading=false;
    //   },
    //   error:()=>{
    //     this.jsonValidated.emit({
    //       valid: false,
    //       error: 'Something went wrong while validating JSON.'
    //     });
    //     this.isLoading = false;
    //   }
    // });
  }

  onClear(){
    this.jsonText='';
    this.reset.emit(null);
  }
}
