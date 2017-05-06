import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {Query} from './components/searchDirection/searchDirection.component';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'ticket-tickets',
  templateUrl: 'tickets.component.html',
  styleUrls: ['tickets.component.css']
})
export class TicketsComponent {
  private routes = [Query];

  constructor(private httpService: HttpService) {
  }

  find(query: Query) {
    this.httpService.getRoutes(query)
      .then(response => this.routes = response);
  }

}
