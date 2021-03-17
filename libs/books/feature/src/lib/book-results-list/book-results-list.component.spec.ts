import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  AuthorsPipe,
  FormatDatePipe,
  UnknownValuePipe,
} from '@tmo/shared/pipes';
import { BookResultsListComponent } from './book-results-list.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
