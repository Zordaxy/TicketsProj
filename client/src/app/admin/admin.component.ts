import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {HttpService} from '../services/http.service';
import {Route} from '../models/ticket.model';

@Component({
  selector: 'ticket-admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.scss']
})
export class AdminComponent implements OnInit {
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

