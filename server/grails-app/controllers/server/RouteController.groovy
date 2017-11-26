package server

import grails.converters.JSON
import grails.rest.RestfulController
import org.grails.web.json.JSONElement

class RouteController extends RestfulController<Route> {
    static responseFormats = ['json', 'xml']

    RouteController() {
        super(Route)
    }

    def get(Long routeId) {
        respond(getRouteMap(routeId))
    }

    def list() {
        List<Route> routes = Route.list()

        List result = []
        routes.each { route ->
            result.add(getRouteMap(route.id))
        }

        respond result
    }

    def add() {
        //JSONObject json = request.JSON
        JSONElement body = JSON.parse(request.reader)

        def route = new Route()
        route.departureTime = new Date(body.departureTime.toString())
        route.departure = Station.get(body.departure.id)
        route.arrival = Station.get(body.arrival.id)

        if(body.arrivalTime) {
            route.arrivalTime = new Date(body.arrivalTime?.toString())

        }

        if(body.price) {
            route.price = body.price?.toDouble()
        }
        route.save(flush: true)

        respond getRouteMap(route.id)
    }

    def delete(Long routeId) {
        def route = Route.get(routeId)
        route.delete(flush: true)

        respond {}
    }

    Map getRouteMap(Long routeId) {
        Route route = Route.get(routeId)

        return [id           : route.id,
                arrivalTime  : route.arrivalTime,
                price        : route.price,
                departureTime: route.departureTime,
                arrival      : Station.get(route.arrival.id),
                departure    : Station.get(route.departure.id)]
    }
}
