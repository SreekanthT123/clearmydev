import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

export const LayoutStore = signalStore(
  {
    providedIn: 'root',
  },
  withState({
    showAppDropdown: false,
    showLogoAlways: true,
    showButtons:true,
  }),
  withMethods((store) => {
    return {
      setShowAppDropdown(value: boolean) {
        patchState(store, {
          showAppDropdown: value,
        });
      },
      setShowLogoAlways(value: boolean) {
        patchState(store, {
          showLogoAlways: value,
        });
      },
      setShowButtons(value: boolean) {
        patchState(store, {
          showButtons: value,
        });
      },
    };
  }),
);
