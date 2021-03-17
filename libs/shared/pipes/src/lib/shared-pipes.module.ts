import { NgModule } from '@angular/core';
import { FormatDatePipe } from './format-date.pipe';
import { AuthorsPipe } from './authors.pipe';
import { UnknownValuePipe } from './unknown.pipe';

@NgModule({
  declarations: [FormatDatePipe, AuthorsPipe, UnknownValuePipe],
  exports: [FormatDatePipe, AuthorsPipe, UnknownValuePipe],
})
export class SharedPipesModule {}
