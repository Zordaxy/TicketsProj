import {
  Component, EventEmitter, Input,
  OnInit, Output,
  ViewEncapsulation
} from '@angular/core';
import {HttpService} from '../../../services/http.service';
import {Query} from '../searchDirection/searchDirection.component';

@Component({
  selector: 'ticket-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss']
})


export class ListComponent {
  @Input() routes: [Query];
  @Input() admin;
  @Output() onRemove: EventEmitter<Query> = new EventEmitter<Query>();

  constructor() {
  }

  remove(route: Query) {
    this.onRemove.emit(route);
  }
}
