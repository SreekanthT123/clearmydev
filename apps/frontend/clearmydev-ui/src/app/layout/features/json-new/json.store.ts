import { inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { JsonService } from './json.service';
import { UsageService } from '../../../core/usage/usage.service';

export const JsonStore = signalStore(
  withState({
    loading: false,
    validationResult: null as any | null,
    aiResult: null as any | null,
    error: null as string | null,
    originalJson: null as string | null,
  }),
  withProps(() => ({
    _jsonService: inject(JsonService),
    _usageService: inject(UsageService),
  })),
  withMethods((store) => {
    return {
      validateJson(json: string) {
        if (!json.trim()) return;
        patchState(store, {
          loading: false,
          error: null,
          validationResult: null,
          aiResult: null,
          originalJson: json,
        });

        store._jsonService.validateJson(json).subscribe({
          next: (res) => {
            if (!res.success) {
              patchState(store, {
                loading: false,
                error: res.error || 'Something went wrong',
                validationResult: null,
              });
              return;
            }
            patchState(store, {
              loading: false,
              validationResult: res.data,
            });
          },
          error: () => {
            patchState(store, {
              error: 'Server unavailable. Please try again.',
              loading: false,
            });
          },
        });
      },
      fixJsonWithAI() {
        patchState(store, {
          loading: false,
          error: null,
          aiResult: null,
        });

        store._jsonService.fixJson(store.originalJson()!).subscribe({
          next: (res) => {
            if (!res.success) {
              patchState(store, {
                loading: false,
                error: res.error || 'Something went wrong',
                aiResult: null,
              });
              return;
            }
            patchState(store, {
              loading: false,
              aiResult: res.data,
            });
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
          validationResult: null,
          aiResult: null,
          originalJson: null,
        });
      },
    };
  }),
);
