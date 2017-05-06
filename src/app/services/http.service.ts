import {Http, Response, URLSearchParams} from '@angular/http';
import {Query} from '../tickets/components/searchDirection/searchDirection.component';
import 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class HttpService {
  url = 'https://restservice-fa1e0.firebaseio.com/routes';

  constructor(private http: Http) {
  }

  getRoutes(query: Query) {
    let params: URLSearchParams = new URLSearchParams();
    let date = query.date ? query.date.toString() : (Date.now() + 1).toString();
    console.log(`date: ${date}`);
    params.set('date', date);
    params.set('departure', query.departure);
    params.set('target', query.target);

    return this.http.get(`${this.url}.json`, {search: params})
      .toPromise()
      .then(response => {
        let json = response.json();
        let routes = [];
        for (let route in json) {
          json[route].id = route;
          routes.push(json[route]);
        }
        return routes;
      });
  }

  addRoutes(query: Query): Promise<Response> {
    query.date = query.date || new Date().toISOString().slice(0, 10);
    return this.http.post(`${this.url}.json`, JSON.stringify(query)).toPromise();
  }

  removeRoute(route: Query): Promise<Response> {
    return this.http.delete(`${this.url}/${route.id}.json`).toPromise();
  }
}
