import {Http, Response, RequestOptionsArgs, RequestMethod, URLSearchParams, Headers} from '@angular/http';
import 'rxjs';
import {Injectable} from '@angular/core';
import {Route, Station} from '../models/ticket.model';

@Injectable()
export class HttpService {
  //url = 'https://restservice-fa1e0.firebaseio.com/routes';
  url = 'http://localhost:8150';
  contentHeaders: Headers;

  constructor(private http: Http) {
    this.contentHeaders = new Headers();
    this.contentHeaders.append('Accept', 'application/x-www-form-urlencoded');
  }

  getRoutes(route: Route = null) {
    let params: URLSearchParams = new URLSearchParams();
    if(route) {
      params.set('departure', route.departure ? route.departure.id.toString() : null);
      params.set('arrival', route.arrival ? route.arrival.id.toString() : null);
      params.set('departureTime', JSON.stringify(route.departureTime));
    }

    let defOptions: RequestOptionsArgs = {
      headers: this.contentHeaders,
      withCredentials: true,
      search: params
    };

    return this.http.get(`${this.url}/routes`, defOptions)
      .toPromise()
      .then(response => {
        let json = response.json();
        let routes = [];
        for (let route in json) {
          if (json.hasOwnProperty(route)) {
            routes.push(json[route]);
          }
        }
        return routes;
      });
  }

  getStations() {
    let defOptions: RequestOptionsArgs = {
      headers: this.contentHeaders,
      withCredentials: true
    };

    return this.http.get(`${this.url}/stations`, defOptions)
      .toPromise()
      .then(response => {
        let json = response.json();
        let sessions = [];
        for (let session in json) {
          sessions.push(json[session]);
        }
        return sessions;
      });
  }

  addRoute(route: Route): Promise<Response> {
    return this.http.post(`${this.url}/routes`, JSON.stringify(route)).toPromise();
  }

  removeRoute(id: number): Promise<Response> {
    return this.http.delete(`${this.url}/routes/${id}`).toPromise();
  }

  addStation(station: Station): Promise<Response> {
    return this.http.post(`${this.url}/stations`, JSON.stringify(station)).toPromise();
  }

  removeStation(id: number): Promise<Response> {
    return this.http.delete(`${this.url}/stations/${id}`).toPromise();
  }
}
