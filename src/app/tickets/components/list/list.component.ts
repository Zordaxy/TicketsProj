import {
  Component, EventEmitter, Input,
  OnInit, Output,
  ViewEncapsulation
} from '@angular/core';
import {HttpService} from '../../../services/http.service';
import {Query, Route} from '../searchDirection/searchDirection.component';

@Component({
  selector: 'ticket-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss']
})


export class ListComponent {
  @Input() routes: [Route];
  @Input() admin;
  @Output() onRemove: EventEmitter<Route> = new EventEmitter<Route>();

  constructor() {
  }

  remove(route: Route) {
    this.onRemove.emit(route);
  }

  localizeDate(date: string) {
    return new Date(date).toLocaleTimeString();
  }
}
