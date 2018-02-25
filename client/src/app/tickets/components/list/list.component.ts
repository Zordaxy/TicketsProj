import {
  Component, EventEmitter, Input,
  OnInit, Output,
} from '@angular/core';
import {HttpService} from '../../../services/http.service';
import {Route} from '../../../models/ticket.model';

@Component({
  selector: 'ticket-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss']
})


export class ListComponent {
  @Input() routes: [Route];
  @Input() admin;
  @Output() onRemove: EventEmitter<any> = new EventEmitter<any>();

  constructor(private httpService: HttpService) {
  }

  remove(route: Route) {
    this.httpService.removeRoute(route.id)
      .then(() => {
        this.onRemove.emit();
      });
  }

  formatDate(date: string) {
    let rawDate: Date = new Date(date);
    rawDate.setSeconds(0, 0);

    return rawDate.toLocaleString();
  }
}
