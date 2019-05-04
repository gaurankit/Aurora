namespace ORXe_Flight_Response {

    export interface Value {
        count: number;
        startingPrice: number;
        value: string;
        name: string;
    }

    export interface Range {
        count: number;
        from: number;
        to: number;
    }

    export interface Facet {
        values: Value[];
        name: string;
        type: string;
        ranges: Range[];
    }

    export interface Filters {
      airlineFilters: ORXe_Flight_Response.Facet[];
      stopsFilter: ORXe_Flight_Response.Facet[];
      cabinsFilters: ORXe_Flight_Response.Facet[];
      priceFilters: ORXe_Flight_Response.Facet[];
    }

}
