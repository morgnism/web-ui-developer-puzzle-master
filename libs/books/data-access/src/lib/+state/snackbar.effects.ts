import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import * as SnackbarActions from './snackbar.actions';
import { filter, mergeMap, switchMap, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SnackBarEffects {
  openSnackbar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SnackbarActions.snackbarConfirm),
      switchMap(({ config, onUndo }) =>
        this.openSnackBar(config).pipe(
          filter(({ dismissedByAction }) => dismissedByAction),
          mergeMap(() => [onUndo, SnackbarActions.closeSnackbar()])
        )
      )
    )
  );

  closeSnackbar$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(SnackbarActions.closeSnackbar),
        tap(() => this.snackBar.dismiss())
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private snackBar: MatSnackBar) {}

  private openSnackBar({
    message,
    actionLabel = 'Undo',
    config = {
      duration: 2000,
    },
  }: {
    message: string;
    actionLabel?: string;
    config?: MatSnackBarConfig;
  }) {
    const snackRef = this.snackBar.open(message, actionLabel, config);
    return snackRef.afterDismissed();
  }
}
