package server

import grails.rest.RestfulController
import server.Station

class StationController extends RestfulController<Station> {
    static responseFormats = ['json', 'xml']

    StationController() {
        super(Station)
    }

    def get(Long stationId) {
        respond(getStationMap(stationId))
    }

    def list() {
        List<Station> stations = Station.list()

        List result = []
        stations.each { station ->
            result.add(getStationMap(station.id))
        }

        respond result
    }

    Map getStationMap(Long stationId) {
        Station station = Station.get(stationId)

        return [id            : station.id,
                name          : station.name,
                incomingRoutes: station.incomingRoutes.collect{route -> route.id},
                outgoingRoutes: station.outgoingRoutes]
    }
}
