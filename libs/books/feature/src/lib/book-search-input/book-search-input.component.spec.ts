import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedTestingModule } from '@tmo/shared/testing';
import { BooksFeatureModule } from '../books-feature.module';
import { BookSearchInputComponent } from './book-search-input.component';

describe('BookSearchInputComponent', () => {
  let component: BookSearchInputComponent;
  let fixture: ComponentFixture<BookSearchInputComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          BooksFeatureModule,
          NoopAnimationsModule,
          SharedTestingModule,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchInputComponent);
    component = fixture.componentInstance;
    component.searchForm = new FormGroup({
      term: new FormControl(''),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
