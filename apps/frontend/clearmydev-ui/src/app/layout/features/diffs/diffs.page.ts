import { Component, inject } from '@angular/core';
import { ExplainDiffService } from './diffs.service';
import { DiffInputComponent } from './components/diff-input/diff-input.component';
import { DiffOutputComponent } from './components/diff-output/diff-output.component';
import { DiffsStore } from './diffs.store';

@Component({
  standalone: true,
  imports: [DiffInputComponent, DiffOutputComponent],
  templateUrl: './diffs.page.html',
  providers:[ExplainDiffService,DiffsStore]
})
export class DiffsPage {
  title = 'explain-my-diif-ui';
  diffsStore = inject(DiffsStore);
  isLoading = this.diffsStore.loading;
  explanation = this.diffsStore.result;
  errormessage = this.diffsStore.error;

  onSubmit(data: { before: string; after: string; context: string }) {
    this.diffsStore.explainDiff(data.before, data.after, data.context);
  }
}
