import {Component, OnInit} from '@angular/core';
import {HttpService} from '../services/http.service';
import {Route, Station} from '../models/ticket.model';

@Component({
  selector: 'ticket-stations',
  templateUrl: 'stations.component.html',
  styleUrls: ['stations.component.scss']
})
export class StationsComponent implements OnInit {
  private stations = [];

  constructor(private httpService: HttpService) {
  }

  get() {
    this.httpService.getStations()
      .then(stations => {
        this.stations = stations;
      });
  }

  remove(station: Station) {
    this.httpService.removeStation(station.id)
      .then(() => this.get());
  }

  ngOnInit() {
    this.get();
  }

  formatDate(date: string) {
    let rawDate: Date = new Date(date);
    rawDate.setSeconds(0, 0);

    return rawDate.toLocaleString();
  }
}

