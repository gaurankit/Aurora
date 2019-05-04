// <reference path='./CustomerInfo.ts'/>;
namespace ORXe_Flight_Request  {
   export interface ResultRequest {
     paging: Paging;
     sessionId: string;
     correlationId: string;
     facets?: ORXe_Flight_Request.Facets[] ;
   }
   export interface ReturnResultRequest extends ResultRequest {
     fareOptionId: string;
   }
 }
 