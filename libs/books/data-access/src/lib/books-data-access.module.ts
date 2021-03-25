import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import * as fromBooks from './+state/books.reducer';
import { BooksEffects } from './+state/books.effects';
import * as fromReadingList from './+state/reading-list.reducer';
import { ReadingListEffects } from './+state/reading-list.effects';
import { SnackBarEffects } from './+state/snackbar.effects';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
    StoreModule.forFeature(fromBooks.BOOKS_FEATURE_KEY, fromBooks.reducer),
    StoreModule.forFeature(
      fromReadingList.READING_LIST_FEATURE_KEY,
      fromReadingList.reducer
    ),
    EffectsModule.forFeature([
      BooksEffects,
      ReadingListEffects,
      SnackBarEffects,
    ]),
  ],
})
export class BooksDataAccessModule {}
