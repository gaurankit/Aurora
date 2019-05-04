import { Injectable } from '@angular/core';
// <reference path='../../entities/flight/response/engine-search-respone.ts'/>;
// <reference path='../../entities/flight/response/ui-search-response.ts'/>;

@Injectable({
  providedIn: 'root'  // <- ADD THIS
})
export class PassengerFareTranslator {

  public static Translate(request : ORXe_Flight_Response.PassengerFare[]): ORXe_Flight_Response.UIPassengerFare {

    const response = {} as ORXe_Flight_Response.UIPassengerFare;
    let totalPassengerCount = 0;
    request.forEach(ps => {
      totalPassengerCount = totalPassengerCount + ps.paxQty;
    });
    const passengerFare = request.find(fare => fare.paxType === 'Adult');
    if(passengerFare !== null) {
      response.totalAmount = passengerFare.totalAmount;
      response.passengerCount = totalPassengerCount;
    }
    return response;
  }
}
