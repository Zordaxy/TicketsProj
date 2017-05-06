class UrlMappings {

  static excludes = ["/guacamole/tunnel", "/guacamole/websocket"]

  static mappings = {
    "/"(controller: "app", action: "index")

    //4xx handling
    "401"(controller: "error", action: "error4xx")
    "403"(controller: "error", action: "error4xx")
    "404"(controller: "error", action: "error4xx")
    "405"(controller: "error", action: "error4xx")
    "406"(controller: "error", action: "error4xx")
    "407"(controller: "error", action: "error4xx")
    "408"(controller: "error", action: "error4xx")
    "409"(controller: "error", action: "error4xx")
    //5xx handling
    "500"(controller: "error", action: "error")
    "501"(controller: "error", action: "error")

    "/tickets(.$format)?"(controller: 'ticket', action: 'list', method: 'get')
    "/tickets/$ticketId(.$format)?"(controller: 'ticket', action: 'info', method: 'get')
    "/tickets/$ticketId(.$format)?"(controller: 'ticket', action: 'update', method: 'patch')
    "/tickets/$ticketId(.$format)?"(controller: 'ticket', action: 'delete', method: 'delete')
    "/tickets/(.$format)?"(controller: 'ticket', action: 'create', method: 'post')

    "/$controller/$action?/$id?" {
      constraints {
        //constraints
      }
    }
  }
}
