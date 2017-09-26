package server

import grails.rest.RestfulController
import server.Station

class StationController extends RestfulController<Station> {
    static responseFormats = ['json', 'xml']

    StationController() {
        super(Station)
    }
}
