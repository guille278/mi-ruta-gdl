export interface AgenciesType {
    agency_id: string,
    agency_name: string,
    routes: Array<RouteType>,
}


export interface RouteType {
    route_id: string,
    route_short_name: string,
    route_long_name: string,
    route_color: string,
    route_type: number,
}