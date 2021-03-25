import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ReadingListItem } from '@tmo/shared/models';

@Component({
  selector: 'tmo-reading-list-action-buttons',
  templateUrl: 'reading-list-action-buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReadingListActionButtonComponent {
  @Input() book: ReadingListItem;

  @Output() updateBook = new EventEmitter<ReadingListItem>();
  @Output() removeBook = new EventEmitter<ReadingListItem>();
}
