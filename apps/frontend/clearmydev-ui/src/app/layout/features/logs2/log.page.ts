import { Component, inject } from '@angular/core';
import { LogInputComponent } from './components/log-input/log-input.component';
import { LogOutputComponent } from './components/log-output/log-output.component';
import { LogStore } from './log.store';
import { LogApi } from './log.service';
import { LayoutStore } from '../../layout/layout-store/layout.store';

@Component({
  standalone: true,
  imports: [LogInputComponent, LogOutputComponent],
  templateUrl: './log.page.html',
  providers:[LogStore,LogApi]
})
export class LogsPage {
  // loading: boolean = false;
  // error: string = '';
  // result: any = null;

  logsStore = inject(LogStore);
  isLoading = this.logsStore.loading;
  explanation = this.logsStore.result;
  errormessage = this.logsStore.error;
layoutStore = inject(LayoutStore);
  constructor() {
    this.layoutStore.setShowAppDropdown(true);
    this.layoutStore.setShowButtons(false);
  }

  onSubmit(data: { logs: string; context: string }) {
    this.logsStore.explain(data.logs, data.context);
  }
  clear() {
    // this.logs = '';
    // this.store.reset();
  }
  ngOnDestroy() {
    this.layoutStore.setShowAppDropdown(false);
    this.layoutStore.setShowButtons(true);
  }
}
