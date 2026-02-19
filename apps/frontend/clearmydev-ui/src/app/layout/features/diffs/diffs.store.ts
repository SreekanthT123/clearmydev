import { inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { ExplainDiffService } from './diffs.service';
import { ExplainDiffResponse } from './diffs.model';
import { UsageService } from '../../../core/usage/usage.service';

export const DiffsStore = signalStore(
  withState({
    loading: false,
    result: null as ExplainDiffResponse | null,
    error: null as string | null,
  }),
  withProps(() => ({
    _diffsService: inject(ExplainDiffService),
    _usageService: inject(UsageService),
  })),
  withMethods((store) => {
    return {
      explainDiff(before: string, after: string, context: string) {
        if (!before.trim() || !after.trim()) return;

        patchState(store, {
          loading: true,
          error: null,
          result: null,
        });

        store._diffsService.expalinDiff(before, after, context).subscribe({
          next: (res) => {
            if (!res.success) {
              patchState(store, {
                loading: false,
                error: res.error || 'Something went wrong',
                result: null,
              });
              return;
            }
            patchState(store, {
              result: res.data,
              loading: false,
            });
            store._usageService.loadUsage();
          },
          error: (err) => {
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
