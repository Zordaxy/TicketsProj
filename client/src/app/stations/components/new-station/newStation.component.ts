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
  @Output() onUpdate: EventEmitter<any> = new EventEmitter<any>();
  stations: Station[];

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.getStations()
      .then(stations => {
        this.stations = stations;
      });
  }

  public add(name: string) {
    this.httpService.addStation(new Station(name))
      .then(() => {
        this.onUpdate.emit();
      });
  }
}

