import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ReadingListBook } from '@tmo/books/data-access';

@Component({
  selector: 'tmo-book-results-list',
  templateUrl: 'book-results-list.component.html',
  styleUrls: ['./book-results-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookResultsListComponent {
  @Input() searchTerm: string;
  @Input() books: ReadingListBook[];

  @Output() search = new EventEmitter();
  @Output() addBook = new EventEmitter<ReadingListBook>();

  searchExample() {
    this.search.emit();
  }

  addBookToReadingList(book: ReadingListBook) {
    this.addBook.emit(book);
  }
}
