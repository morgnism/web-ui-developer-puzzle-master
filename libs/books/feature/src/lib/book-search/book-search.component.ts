import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addToReadingList,
  clearSearch,
  getAllBooks,
  searchBooks,
} from '@tmo/books/data-access';
import { Book } from '@tmo/shared/models';

@Component({
  selector: 'tmo-book-search',
  templateUrl: './book-search.component.html',
})
export class BookSearchComponent {
  searchTerm: string;
  books$ = this.store.select(getAllBooks);

  constructor(private readonly store: Store) {}

  addBookToReadingList(book: Book) {
    this.store.dispatch(addToReadingList({ book }));
  }

  searchBooks(term: string) {
    // `combineLatest` doesn't emit until all observables complete
    // while `merge` emits twice, once immediately for the enter skipping the map entirely
    // this is to prevent KeyboardEvent from querying
    if (typeof term !== 'string') {
      return;
    }
    this.searchTerm = term;
    if (term) {
      this.store.dispatch(searchBooks({ term }));
    } else {
      this.store.dispatch(clearSearch());
    }
  }
}
