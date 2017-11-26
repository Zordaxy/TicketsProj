import {Http, Response, RequestOptionsArgs, RequestMethod, URLSearchParams, Headers} from '@angular/http';
import 'rxjs';
import {Injectable} from '@angular/core';
import {Route} from '../models/ticket.model';

@Injectable()
export class HttpService {
  //url = 'https://restservice-fa1e0.firebaseio.com/routes';
  url = 'http://localhost:8150';
  contentHeaders: Headers;

  constructor(private http: Http) {
    this.contentHeaders = new Headers();
    this.contentHeaders.append('Accept', 'application/x-www-form-urlencoded');
  }

  getRoutes(route: Route = new Route(null, null, null)) {
    let params: URLSearchParams = new URLSearchParams();
    let date = route.departureTime ? route.departureTime.toString() : (Date.now() + 1).toString();
    // params.set('date', date);
    // params.set('departure', route.departure);
    // params.set('target', route.arrival);

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
          routes.push(json[route]);
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
    return this.http.post(`${this.url}/routes`, this.stringifyRoute(route)).toPromise();
  }

  removeRoute(id: number): Promise<Response> {
    return this.http.delete(`${this.url}/routes/${id}`).toPromise();
  }

  stringifyRoute(route: Route) {
    // let encoded = {};
    // for (let key in route) {
    //   encoded[key] = JSON.stringify(route[key]);
    // }
    // return encoded;
    return JSON.stringify(route);
  }
}
