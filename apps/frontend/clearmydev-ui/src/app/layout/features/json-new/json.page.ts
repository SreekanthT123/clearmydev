import { Component, inject } from '@angular/core';
import { InputEditorSectionComponent } from './components/input-editor-section/input-editor-section.component';
import { OutputViewerSectionComponent } from './components/output-viewer-section/output-viewer-section.component';
import { JsonStore } from './json.store';
import { JsonService } from './json.service';
import { LayoutStore } from '../../layout/layout-store/layout.store';

@Component({
  standalone: true,
  selector: 'app-json-new',
  imports: [InputEditorSectionComponent, OutputViewerSectionComponent],
  templateUrl: './json.page.html',
  providers: [JsonStore, JsonService],
})
export class JsonNewComponent {
  jsonStore = inject(JsonStore);

  isLoading = this.jsonStore.loading;
  validationResult = this.jsonStore.validationResult;
  aiResult = this.jsonStore.aiResult;
  layoutStore = inject(LayoutStore);
  constructor() {
    this.layoutStore.setShowAppDropdown(true);
    this.layoutStore.setShowButtons(false);
  }
  onJsonValidate(event: any) {
    this.jsonStore.validateJson(event);
  }
  onFixWithAi() {
    console.log('emitted signal************');
    this.jsonStore.fixJsonWithAI();
  }
  reset() {
    this.jsonStore.reset();
  }
  ngOnDestroy() {
    this.layoutStore.setShowAppDropdown(false);
    this.layoutStore.setShowButtons(true);
  }
}
