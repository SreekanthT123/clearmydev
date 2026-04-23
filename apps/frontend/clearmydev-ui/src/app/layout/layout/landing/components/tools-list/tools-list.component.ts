import { Component, output } from '@angular/core';

@Component({
  selector: 'app-tools-list',
  imports: [],
  templateUrl: './tools-list.component.html',
  styleUrl: './tools-list.component.css'
})
export class ToolsListComponent {
  tryfeautreEmitter = output<string>()

  tryFeature(link:string){
    this.tryfeautreEmitter.emit(link);
  }
}
