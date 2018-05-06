package server

import grails.rest.RestfulController
import org.grails.web.json.JSONObject
import grails.gorm.DetachedCriteria

class RouteController extends RestfulController<Route> {
    static responseFormats = ['json', 'hal']

    RouteController() {
        super(Route)
    }

    def get(Long routeId) {
        def result = getRouteMap(routeId)
        render result
    }

    def list(Long departure, Long arrival, Long departureTime) {
        DetachedCriteria<Route> query = Route.where {
            if (departure) {
                eq 'departure', Station.get(departure)
            }
            if (arrival) {
                eq 'arrival', Station.get(arrival)
            }
            if (departureTime) {
                gt 'departureTime', new Date(departureTime)
            }
        }
        List<Route> routes = query.findAll()
        List result = []
        routes.each { route ->
            result.add(getRouteMap(route.id))
        }
        [list: result]
    }

    def add() {
        JSONObject body = request.JSON as JSONObject
        def route = new Route()
        route.departureTime = new Date(body.departureTime.toLong())
        route.departure = Station.get(body.departure.id)
        route.arrival = Station.get(body.arrival.id)
        route.arrivalTime = body.arrivalTime ? new Date(body.arrivalTime.toString()) : null
        route.price = body.price?.toDouble()
        route.save(flush: true)
        render getRouteMap(route.id)
    }

    def delete(Long routeId) {
        def route = Route.get(routeId)
        route.delete(flush: true)
        render {}
    }

    private Map getRouteMap(Long routeId) {
        Route route = Route.get(routeId)
        return [id           : route.id,
                arrivalTime  : route.arrivalTime?.getTime(),
                price        : route.price,
                departureTime: route.departureTime?.getTime(),
                arrival      : Station.get(route.arrival.id),
                departure    : Station.get(route.departure.id)]
    }
}
