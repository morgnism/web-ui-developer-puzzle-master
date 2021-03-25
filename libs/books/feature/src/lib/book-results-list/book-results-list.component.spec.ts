import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  AuthorsPipe,
  FormatDatePipe,
  UnknownValuePipe,
} from '@tmo/shared/pipes';
import { BookResultsListComponent } from './book-results-list.component';

const mockBooks = [
  {
    id: 'id',
    title: 'A book',
    authors: ['Author Authorton'],
    description: 'A description',
    publisher: 'A publisher',
    publishedDate: new Date(2020, 0, 1).toISOString(),
    coverUrl: 'a url',
    isAdded: true,
    finished: true,
    finishedDate: 'a date',
  },
];

describe('BookResultsListComponent', () => {
  let component: BookResultsListComponent;
  let fixture: ComponentFixture<BookResultsListComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          BookResultsListComponent,
          AuthorsPipe,
          FormatDatePipe,
          UnknownValuePipe,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BookResultsListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should display the list of books if a search term was submitted', () => {
    component.searchTerm = 'a term';
    component.books = mockBooks;
    fixture.detectChanges();
    const bookTitle = fixture.nativeElement.querySelector('.book--title');
    expect(bookTitle.textContent).toContain('A book');
  });

  it('should not display a list of books', () => {
    component.searchTerm = '';
    component.books = [];
    fixture.detectChanges();
    const emptyMsg = fixture.nativeElement.querySelector('.empty p');
    expect(emptyMsg.textContent).toContain('JavaScript');
  });
});
