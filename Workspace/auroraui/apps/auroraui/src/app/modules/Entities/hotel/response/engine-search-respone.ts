
namespace ORXe_Flight_Response{

  export interface Airline {
      code: string;
      name: string;
      logoUrl: string;
  }

  export interface City {
      code: string;
      name: string;
      type: string;
      stateCode: string;
      countryCode: string;
  }

  export interface Airport {
      code: string;
      type: string;
      name: string;
      city: City;
  }

  export interface Journey {
      flightRefIds: number[];
      durationMins: number;
  }

  export interface FareCode {
      code: string;
      paxType: string;
  }

  export interface Baggage {
      refId: number;
      paxType: string;
  }

  export interface OptionalData {
      availableSeats: number;
      seatMapAvailable: boolean;
      baggage: Baggage[];
  }

  export interface Attributes {
      wifi: string;
      meal: string;
      checked_baggage: string;
      carry_on: string;
      exchange: string;
      refund: string;
      seats: string;
  }

  export interface FareFamily {
      name: string;
      desc: string;
      attributes: Attributes;
  }

  export interface Segment {
      fareRuleKey: string;
      flightRefId: number;
      cabinType: string;
      classOfService?: string;
      fareCodes: FareCode[];
      optionalData: OptionalData;
      fareFamily?: FareFamily;
  }

  export interface Recommendation {
      cash: number;
      points: number;
      maxQuantity: number;
  }

  export interface PointToCashFactor {
      value: number;
      operator: string;
  }

  export interface RuleSet {
      maximumPoints: number;
      roundingType: string;
      minimumPoints: number;
      pointToCashFactor: PointToCashFactor;
      pointStepSize: number;
      cashRoundingOff: number;
  }

  export interface ActualValue {
      cash: number;
      points: number;
  }

  export interface StateBag {
      key: string;
      value: string;
  }

  export interface Reward {
      id: string;
      name: string;
      rank: number;
      type: string;
      recommendation: Recommendation;
      isEligible: boolean;
      ruleSet: RuleSet;
      actualValue: ActualValue;
      stateBag: StateBag[];
  }

  export interface PurchaseOption {
      totalPurchaseUnits: number;
      cashCurrency: string;
      pointsCurrency: string;
      rewards: Reward[];
  }

  export interface Tax {
      code: string;
      amount: number;
      includedinBase: boolean;
  }

  export interface Penalty {
       type: string;
       amount?: number;
       chargeType?: string;
       percentageValue?: number;
  }

  export interface OptionalData2 {
      penalties: Penalty[];
  }

  export interface PassengerFare {
       paxType: string;
       paxQty: number;
       fees: any[];
       taxes: Tax[];
       discounts: any[];
       baseAmount: number;
       totalDiscount: number;
       totalFees: number;
       totalTaxes: number;
       totalAmount: number;
       optionalData: OptionalData2;
  }

  export interface FareOption {
       refId: string;
       supplierId: string;
       segments: Segment[];
       platingCarrier?: string;
       fareType: string;
       attributes: string[];
       baseAmount: number;
       totalDiscount: number;
       totalFees: number;
       totalTaxes: number;
       totalAmount: number;
       purchaseOption: PurchaseOption;
       passengerFares: PassengerFare[];
  }

  export interface Itinerary {
      refId: number;
      journeys: Journey[];
      fareOptions: FareOption[];
  }

  export interface Departure {
      airportCode: string;
      dateTime: string;
  }

  export interface Arrival {
      airportCode: string;
      dateTime: string;
  }

  export interface OptionalData3 {
       aircraftCode: string;
       aircraftName?: string;
       departureTerminal?: string;
       arrivalTerminal?: string;
       onTimePercentage?: number;
       mileage: number;
       stops: any[];
  }

  export interface Flight {
       refId: number;
       flightNumber: string;
       durationMins: number;
       marketingCarrier: string;
       operatingCarrier: string;
       departure: Departure;
       arrival: Arrival;
       numberOfStops: number;
       optionalData: OptionalData3;
  }

  export interface BagInfo {
      baseAmount: number;
      totalAmount: number;
  }

  export interface Baggage2 {
      refId: number;
      freeBaggages: number;
      bagInfo: BagInfo[];
  }

  export interface OptionalData4 {
      baggages: Baggage2[];
  }

  export interface Supplier {
      id: string;
      name: string;
      family: string;
  }

  export interface EngineSearchResponse {
      currency: string;
      airlines: Airline[];
      airports: Airport[];
      itineraries: Itinerary[];
      flights: Flight[];
      optionalData: OptionalData4;
      suppliers: Supplier[];
      totalResults: number;
  }

}

