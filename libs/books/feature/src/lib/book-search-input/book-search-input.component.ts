import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'tmo-book-search-input',
  templateUrl: 'book-search-input.component.html',
  styleUrls: ['./book-search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookSearchInputComponent {
  @Input() searchForm: FormGroup;

  @Output() search = new EventEmitter();

  searchBooks() {
    this.search.emit();
  }
}
