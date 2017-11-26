package server

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(view:"/index")
        "500"(view:'/error')
        "404"(view:'/notFound')



        //'/routes'(resources:"route")
        "/routes(.$format)?"(controller: "route", action: "list", method:"GET")
        "/routes/${routeId}(.$format)?"(controller: "route", action: "get", method:"GET")
        "/routes/${routeId}(.$format)?"(controller: "route", action: "delete", method:"DELETE")
        "/routes(.$format)?"(controller: "route", action: "add", method:"POST")

        "/stations(.$format)?"(controller: "station", action: "list", method:"GET")
        "/stations/${stationId}(.$format)?"(controller: "station", action: "get", method:"GET")
        '/tickets'(resources:"ticket")
    }
}
