import {
  patchState,
  signalStore,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { ExplainIncidentService } from './incident.service';
import { inject } from '@angular/core';
import { ExplainIncidentResponse } from './incident.model';
import { UsageService } from '../../../core/usage/usage.service';

export const IncidentStore = signalStore(
  withState({
    loading: false,
    result: null as ExplainIncidentResponse | null,
    error: null as string | null,
  }),
  withProps(() => ({
    _incidentService: inject(ExplainIncidentService),
    _usageService: inject(UsageService),
  })),
  withMethods((store) => {
    return {
      explainIncident(payload: {
        description: string;
        logs?: string;
        errors?: string;
        changes?: string;
        context?: string;
      }) {
        // if (!incident_description.trim()) return;

        patchState(store, {
          loading: true,
          error: null,
          result: null,
        });

        store._incidentService.explainIncident(payload).subscribe({
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
