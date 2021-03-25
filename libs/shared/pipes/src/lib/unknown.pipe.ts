import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unknown',
})
export class UnknownValuePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value || 'Unknown';
  }
}
