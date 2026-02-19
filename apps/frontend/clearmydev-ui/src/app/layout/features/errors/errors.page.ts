import { Component, inject } from '@angular/core';
import { ErrorInputComponent } from './components/error-input/error-input.component';
import { ExplanationOutputComponent } from './components/explanation-output/explanation-output.component';
import { ExplainService } from './error.service';
import { Explanation } from './error.model';
import { ErrorStore } from './error.store';

@Component({
  standalone: true,
  imports: [ErrorInputComponent, ExplanationOutputComponent],
  templateUrl: './error.page.html',
  providers: [ExplainService, ErrorStore],
})
export class ErrorsPage {
  errorStore = inject(ErrorStore);
  isLoading = this.errorStore.loading;
  explanation = this.errorStore.result;
  errormessage = this.errorStore.error;

  constructor(private explainService: ExplainService) {}

  onExplain(payload: { errorText: string; framework: string }) {
    this.errorStore.explain(payload.errorText, payload.framework);

    // this.isLoading = true;
    // this.explanation = null;
    // this.errormessage = '';

    // this.explainService
    //   .explainError(payload.errorText, payload.framework)
    //   .subscribe({
    //     next: (res) => {
    //       this.explanation = res;
    //       this.isLoading = false;
    //     },
    //     error: () => {
    //       this.errormessage =
    //         'We couldn’t analyze this error. Try adding more context.';
    //       this.isLoading = false;
    //     },
    //   });
  }
}
