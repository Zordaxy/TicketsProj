package server

import grails.rest.Resource

import javax.xml.bind.PrintConversionEvent

@Resource(formats=['json', 'xml'])
class Station {
    String name

    static hasMany = [incomingRoutes: Route, outgoingRoutes: Route]
    static mappedBy = [outgoingRoutes: "departure", incomingRoutes: "arrival"]
}
