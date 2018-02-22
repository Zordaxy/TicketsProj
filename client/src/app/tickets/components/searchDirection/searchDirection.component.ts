import {
  Component, EventEmitter,
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

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.route = new Route(null, null, new Date().getTime());
    this.httpService.getStations()
      .then(stations => {
        this.stations = stations;
      });
  }

  public find() {
    //this.onFind.emit(this.query);
  }
}
