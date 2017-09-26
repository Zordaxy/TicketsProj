import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {HttpService} from '../services/http.service';
import {Query, Route} from '../tickets/components/searchDirection/searchDirection.component';

@Component({
  selector: 'ticket-admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.scss']
})
export class AdminComponent implements OnInit {
  public query: Query;
  private routes = [];

  constructor(private httpService: HttpService) {
    this.query = new Query();
  }

  public add() {
    console.log(this.query);
    this.httpService.addRoutes(this.query)
      .then(() => this.get());
  }

  get() {
    this.httpService.getRoutes(new Query())
      .then(response =>
        this.routes = response);
  }

  remove(route: Query) {
    this.httpService.removeRoute(route)
      .then(() => this.get());
  }

  ngOnInit() {
    this.get();
  }
}

