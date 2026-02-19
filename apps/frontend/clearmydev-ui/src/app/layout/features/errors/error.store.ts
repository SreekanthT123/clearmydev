import {
  patchState,
  signalStore,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { Explanation } from './error.model';
import { inject } from '@angular/core';
import { ExplainService } from './error.service';
import { UsageService } from '../../../core/usage/usage.service';

export const ErrorStore = signalStore(
  withState({
    loading: false,
    result: null as Explanation | null,
    error: null as string | null,
  }),
  withProps(() => ({
    _errorService: inject(ExplainService),
    _usageService: inject(UsageService),
  })),
  withMethods((store) => {
    return {
      explain(errorText: string, context: string) {
        if (!errorText.trim()) return;

        patchState(store, {
          loading: true,
          error: null,
          result: null,
        });

        store._errorService.explainError(errorText, context).subscribe({
          next: (res) => {
            if (!res.success) {
              patchState(store, {
                loading: false,
                error: res.error || 'Something went wrong',
                result: null,
              });
              return;
            }

            patchState(store, { result: res.data, loading: false });
            store._usageService.loadUsage();
          },
          error: () => {
            patchState(store, {
              error: 'Server unavailable. Please try again.',
              loading: false,
            });
          },
        });
      },
      reset() {
        patchState(store, {
          loading: false,
          error: null,
          result: null,
        });
      },
    };
  }),
);
