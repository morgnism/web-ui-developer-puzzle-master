import { Component, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { merge, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'tmo-book-search-input',
  templateUrl: 'book-search-input.component.html',
  styleUrls: ['./book-search-input.component.scss'],
})
export class BookSearchInputComponent {
  searchForm = this.fb.group({
    term: '',
  });

  search$ = new Subject<void>();

  @Output() search = merge(
    this.search$.asObservable(),
    this.searchForm.get('term').valueChanges
  ).pipe(
    debounceTime(500),
    distinctUntilChanged(),
    map(() => this.searchForm.value.term)
  );

  constructor(private readonly fb: FormBuilder) {}
}
