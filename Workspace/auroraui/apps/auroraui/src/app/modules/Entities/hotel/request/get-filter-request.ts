namespace ORXe_Flight_Request  {
  export interface BaseFilterRequest {
    sessionId: string;
    correlationId: string;
    filters?: (ORXe_Flight_Request.Facets)[];
    journeyType: string;
  }
  export interface ReturnFilterRequest extends  BaseFilterRequest {
    fareOptionId: string;
  }
}
