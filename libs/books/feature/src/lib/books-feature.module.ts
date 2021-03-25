import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedPipesModule } from '@tmo/shared/pipes';

import { BooksDataAccessModule } from '@tmo/books/data-access';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookSearchInputComponent } from './book-search-input/book-search-input.component';
import { BookResultsListComponent } from './book-results-list/book-results-list.component';
import { TotalCountComponent } from './total-count/total-count.component';
import { ReadingListComponent } from './reading-list/reading-list.component';

const EXPORTS = [
  BookSearchComponent,
  BookSearchInputComponent,
  BookResultsListComponent,
  TotalCountComponent,
  ReadingListComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    SharedPipesModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: BookSearchComponent },
    ]),
    BooksDataAccessModule,
  ],
  exports: [...EXPORTS],
  declarations: [...EXPORTS],
})
export class BooksFeatureModule {}
