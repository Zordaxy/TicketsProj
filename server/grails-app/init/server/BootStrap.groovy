package server

class BootStrap {

    def init = { servletContext ->
        def station1 = new Station(name: "Khmelnytsky")
        def station2 = new Station(name: "Iziaslav")
        station1.save()
        station2.save()



        def route = new Route(price: 7.62, departureTime: new Date(), arrivalTime: new Date(), departure: station1, arrival: station2)


        route.save()
    }
    def destroy = {
    }
}
