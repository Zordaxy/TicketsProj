import {
  Component,
} from '@angular/core';
import {HttpService} from '../services/http.service';
import {Route} from '../models/ticket.model';

@Component({
  selector: 'ticket-tickets',
  templateUrl: 'tickets.component.html',
  styleUrls: ['tickets.component.css']
})
export class TicketsComponent {
  private routes = [];
  public route: Route;

  constructor(private httpService: HttpService) {
  }

  find(route: Route) {
    this.httpService.getRoutes(route)
      .then(response => this.routes = response);
  }

  get() {
    this.httpService.getRoutes()
      .then(routes => {
        this.routes = routes;
      });
  }

  remove(route: Route) {
    this.httpService.removeRoute(route.id)
      .then(() => this.get());
  }

  ngOnInit() {
    this.get();
  }
}
