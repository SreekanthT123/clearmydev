import { Component, inject } from '@angular/core';
import { TopnavbarComponent } from '../layout/topnavbar/topnavbar.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LayoutStore } from '../layout/layout-store/layout.store';
import { CustomCursorComponent } from '../general/custom-cursor/custom-cursor.component';

@Component({
  selector: 'app-shell',
  imports: [TopnavbarComponent, RouterOutlet,RouterModule,CustomCursorComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.css'
})
export class ShellComponent {

  layoutStore= inject(LayoutStore);

  

  ngOnInit(){
    console.log("executing show dropdown")
    this.layoutStore.setShowAppDropdown(false)
  }
}
