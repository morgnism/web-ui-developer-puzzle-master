import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { Action, createAction, props } from '@ngrx/store';

const prefix = '[SNACKBAR]';

export const snackbarConfirm = createAction(
  `${prefix} - Snackbar Confirm`,
  props<{
    config: {
      message: string;
      undoLabel?: string;
      config?: MatSnackBarConfig;
    };
    onUndo?: Action;
  }>()
);

export const closeSnackbar = createAction(`${prefix} - Close Snackbar`);
