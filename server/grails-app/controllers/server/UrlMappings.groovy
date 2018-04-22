package server

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?" {}

        "/"(view: "/index")
        "500"(view: '/error')
        "404"(view: '/notFound')

        '/tickets'(resources: "ticket")

        "/routes(.$format)?"(controller: "route", action: "list", method: "GET")
        "/routes/${routeId}(.$format)?"(controller: "route", action: "get", method: "GET")
        "/routes/${routeId}(.$format)?"(controller: "route", action: "delete", method: "DELETE")
        "/routes(.$format)?"(controller: "route", action: "add", method: "POST")

        "/stations(.$format)?"(controller: "station", action: "list", method: "GET")
        "/stations/${stationId}(.$format)?"(controller: "station", action: "get", method: "GET")
        "/stations/${stationId}(.$format)?"(controller: "station", action: "delete", method: "DELETE")
        "/stations(.$format)?"(controller: "station", action: "add", method: "POST")
    }
}
