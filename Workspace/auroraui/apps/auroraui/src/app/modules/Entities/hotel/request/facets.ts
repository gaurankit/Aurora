namespace ORXe_Flight_Request  {
  export interface Facets {
    name: string;
    type: string;
    values?: string[] | null;
    ranges?: (RangesEntity)[] | null;
  }

  export interface RangesEntity {
    from: number;
    to: number;
  }
}
