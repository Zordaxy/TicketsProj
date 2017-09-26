package server

import grails.rest.Resource

import javax.xml.bind.PrintConversionEvent

//@Resource(uri='/stations')
class Station {
    String name

    static constraints = {
    }

    static hasMany = [incomingRoutes: Route, outgoingRoutes: Route]
    static mappedBy = [outgoingRoutes: "departure", incomingRoutes: "arrival"]
}
