import {
  Component, ElementRef, EventEmitter,
  OnInit, Output, ViewChild,
} from '@angular/core';

import {HttpService} from '../../services/http.service';
import {NgForm} from '@angular/forms';
import {Route, Station} from '../../models/ticket.model';

@Component({
  selector: 'new-route',
  templateUrl: 'newRoute.component.html',
  styleUrls: ['newRoute.component.scss']
})
export class NewRouteComponent {
  public route:Route;
  @Output() onUpdate:EventEmitter<any> = new EventEmitter<any>();
  stations: Station[];

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.route = new Route(null, null, new Date().toString());
    this.httpService.getStations()
      .then(stations => {
        this.stations = stations;
      });
  }

  public add(form: NgForm) {
    if(!this.route.departureTime) {
      this.route.departureTime = new Date().toString();
    }

    this.httpService.addRoute(this.route)
      .then(() => {
        this.onUpdate.emit();
      });
    form.reset();
  }

  get diagnostic() { return JSON.stringify(this.route); }
  get departure() {return this.route.departure ? JSON.stringify(this.route.departure) : "empty";}

}

