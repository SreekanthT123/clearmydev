import { Injectable } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

export interface ToastItem {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface ToastState {
  toasts: ToastItem[];
}

export const CustomToastStore = signalStore(
    {providedIn: 'root'},
  withState<ToastState>({ toasts: [] }),
  withMethods((store) => {
    return {
      Show(
        message: string,
        type: 'success' | 'error' | 'info' = 'info',
        duration = 3000,
      ) {
        const id = Date.now() + Math.random();
        patchState(store, (s) => ({
          toasts: [...s.toasts, { id, message, type }],
        }));

        setTimeout(() => this.dismiss(id), duration);
      },
      dismiss(id: number) {
        patchState(store, (s) => ({
          toasts: s.toasts.filter((t) => t.id !== id),
        }));
      },
    };
  }),
);
