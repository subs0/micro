export interface LocationRouteCalculator {
    data: Datum[];
}

export interface Datum {
    location_route_calculator: LocationRouteCalculatorClass;
}

export interface LocationRouteCalculatorClass {
    /** (Required) Name of the route calculator resource. */
    calculator_name: any;
}