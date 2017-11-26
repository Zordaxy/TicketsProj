package server

import grails.rest.Resource

@Resource(formats=['json', 'xml'])
class Route {
    Double price
    Date departureTime
    Date arrivalTime

    static constraints = {
        price nullable: true
        arrivalTime nullable: true
    }

    static hasOne = [departure: Station, arrival: Station]
}
