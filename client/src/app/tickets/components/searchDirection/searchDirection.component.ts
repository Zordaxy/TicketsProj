import {
  Component, EventEmitter, Output,
} from '@angular/core';
import {HttpService} from '../../../services/http.service';
import {Route, Station} from '../../../models/ticket.model';

@Component({
  selector: 'ticket-search-direction',
  templateUrl: 'searchDirection.component.html',
  styleUrls: ['searchDirection.component.scss']
})
export class SearchDirectionComponent {
  public route: Route;
  public stations: Station[];
  @Output() onFind: EventEmitter<Route> = new EventEmitter<Route>();

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    let date = new Date();
    date.setHours(1, 0, 0, 0);
    this.route = new Route(null, null, date.getTime());
    this.httpService.getStations()
      .then(stations => {
        this.stations = stations;
      });
  }

  public find() {
    this.onFind.emit(this.route);
  }

  changeTime(event) {
    this.route.departureTime = new Date(event.currentTarget.valueAsNumber).getTime();
  }
}
