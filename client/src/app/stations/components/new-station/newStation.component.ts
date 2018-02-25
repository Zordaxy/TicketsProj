import {
  Component, ElementRef, EventEmitter,
  OnInit, Output, ViewChild,
} from '@angular/core';

import {HttpService} from '../../../services/http.service';
import {Route, Station} from '../../../models/ticket.model';

@Component({
  selector: 'new-station',
  templateUrl: 'newStation.component.html',
  styleUrls: ['newStation.component.scss']
})
export class NewStationComponent {
  public route: Route;
  @Output() onUpdate: EventEmitter<any> = new EventEmitter<any>();
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

  public add() {
    this.httpService.addRoute(this.route)
      .then(() => {
        this.onUpdate.emit();
      });
    this.route = new Route(null, null, new Date().getTime());
  }

  changeTime(event) {
    this.route.departureTime = new Date(event).getTime();
  }
}

