package server

import grails.converters.JSON
import grails.rest.RestfulController
import org.grails.web.json.JSONElement
import org.grails.web.json.JSONObject
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

    def add() {
        JSONObject body = request.JSON as JSONObject
        def station = new Station()
        station.name = body.name
        station.save(flush: true)

        respond getStationMap(station.id)
    }

    def delete(Long stationId) {
        def station = Station.get(stationId)
        station.incomingRoutes.each {route ->
            route.delete()
        }
        station.outgoingRoutes.each {route ->
            route.delete()
        }
        station.delete(flush: true)

        respond {}
    }

    Map getStationMap(Long stationId) {
        Station station = Station.get(stationId)

        return [id            : station.id,
                name          : station.name,
                incomingRoutes: station.incomingRoutes.collect { route -> [departure: route.departure.name, arrival: route.arrival.name, departureTime: route.departureTime] },
                outgoingRoutes: station.outgoingRoutes.collect { route -> [departure: route.departure.name, arrival: route.arrival.name, departureTime: route.departureTime] }]
    }
}
