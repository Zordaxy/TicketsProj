package server

import grails.rest.Resource

//@Resource(uri='/routes')
class Route {
    Double price
    Date departureTime
    Date arrivalTime

    static constraints = {
    }

    static hasOne = [departure: Station, arrival: Station]
}
