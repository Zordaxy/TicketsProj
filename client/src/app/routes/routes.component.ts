import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {HttpService} from '../services/http.service';
import {Route} from '../models/ticket.model';

@Component({
  selector: 'ticket-routes',
  templateUrl: 'routes.component.html',
  styleUrls: ['routes.component.scss']
})
export class RoutesComponent implements OnInit {
  private routes = [];
  public route: Route;

  constructor(private httpService: HttpService) {
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

