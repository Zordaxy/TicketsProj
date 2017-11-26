export class Station {
  public incomingRoutes: number[];
  public outgoingRoutes: number[];
  public id: number;

  constructor(public name: string) {
  }
}

export class Route {
  public price: number;
  public arrivalTime: string;
  public id: number;

  constructor(public departure: Station,
              public arrival: Station,
              public departureTime: string) {
  }
}
