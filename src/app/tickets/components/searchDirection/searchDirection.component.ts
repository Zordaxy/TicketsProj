import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'ticket-search-direction',
  templateUrl: 'searchDirection.component.html',
  styleUrls: ['searchDirection.component.scss']
})
export class SearchDirectionComponent {
  public query: Query;

  constructor() {
    this.query = new Query();
  }

  public find() {
    console.info(this.query);
  }
}

class Query {
  public date: Date;
  public departure: string;
  public target: string;
}
