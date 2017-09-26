import {Http, Response, RequestOptionsArgs, RequestMethod, URLSearchParams, Headers} from '@angular/http';
import {Query} from '../tickets/components/searchDirection/searchDirection.component';
import 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class HttpService {
  //url = 'https://restservice-fa1e0.firebaseio.com/routes';
  url = 'http://localhost:8150';

  constructor(private http: Http) {
  }

  getRoutes(query: Query) {
    let params: URLSearchParams = new URLSearchParams();
    let date = query.date ? query.date.toString() : (Date.now() + 1).toString();
    params.set('date', date);
    params.set('departure', query.departure);
    params.set('target', query.target);

    let contentHeaders = new Headers();
    contentHeaders.append('Accept', 'application/x-www-form-urlencoded');
    //contentHeaders.append('Content-Type', 'application/json');
    //contentHeaders.append('X-Requested-With', 'XMLHttpRequest');

    let defOptions: RequestOptionsArgs = {
      headers: contentHeaders,
      withCredentials: true,
      search: params
    };

    return this.http.get(`${this.url}/route`, defOptions)
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
    return this.http.post(`${this.url}/route`, JSON.stringify(query)).toPromise();
  }

  removeRoute(route: Query): Promise<Response> {
    return this.http.delete(`${this.url}/route/${route.id}`).toPromise();
  }
}
