import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
  transform(date: void | string): string {
    return date
      ? new Intl.DateTimeFormat('en-US').format(new Date(date))
      : undefined;
  }
}
