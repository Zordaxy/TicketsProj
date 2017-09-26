package server

import grails.rest.RestfulController
import server.Route

class RouteController extends RestfulController<Route> {
    static responseFormats = ['json', 'xml']

    RouteController() {
        super(Route)
    }
}
