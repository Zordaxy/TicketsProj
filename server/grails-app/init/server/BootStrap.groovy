package server

class BootStrap {

    def init = { servletContext ->
        List stations = []
        def station1 = new Station(name: "Khmelnytsky")
        def station2 = new Station(name: "Kyiv")
        def station3 = new Station(name: "Vinnytsia")
        def station4 = new Station(name: "Lviv")

        stations.addAll(station1, station2, station3, station4)
        stations*.save()

        List routes = []
        routes.push(new Route(price: 7.62, departureTime: new Date(), arrivalTime: new Date(), departure: station1, arrival: station2))
        routes.push(new Route(price: 8.62, departureTime: new Date(), arrivalTime: new Date(), departure: station2, arrival: station3))
        routes.push(new Route(price: 9.62, departureTime: new Date(), arrivalTime: new Date(), departure: station3, arrival: station4))
        routes.push(new Route(price: 10.62, departureTime: new Date(), arrivalTime: new Date(), departure: station4, arrival: station1))
        routes*.save()
    }
    def destroy = {
    }
}
