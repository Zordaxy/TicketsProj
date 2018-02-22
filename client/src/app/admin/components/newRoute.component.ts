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
    this.route = new Route(null, null, new Date().getTime());
    this.httpService.getStations()
      .then(stations => {
        this.stations = stations;
      });
  }

  public add(form: NgForm) {
    this.httpService.addRoute(this.route)
      .then(() => {
        this.onUpdate.emit();
      });
    form.reset();
  }

  changeTime(event) {
    this.route.departureTime = new Date(event).getTime()
  }

  getDepartureTime() {
    if (!this.route.departureTime) {
      this.route.departureTime = new Date().getTime();
    }
    return this.route.departureTime;
  }

  get diagnostic() { return JSON.stringify(this.route); }
  get departure() {return this.route.departure ? JSON.stringify(this.route.departure) : "empty";}

  stringify(line: string) {
    console.log(line);
    return JSON.stringify(line);
  }

}

