import {
  Component, EventEmitter,
  OnInit, Output,
  ViewEncapsulation
} from '@angular/core';
import {HttpService} from '../../../services/http.service';

@Component({
  selector: 'ticket-search-direction',
  templateUrl: 'searchDirection.component.html',
  styleUrls: ['searchDirection.component.scss']
})
export class SearchDirectionComponent {
  public query: Query;
  @Output() onFind: EventEmitter<Query> = new EventEmitter<Query>();

  constructor() {
    this.query = new Query();
  }

  public find() {
    this.onFind.emit(this.query);
  }
}

export class Query {
  public date: string;
  public departure: string;
  public target: string;
  public id: string;
}
