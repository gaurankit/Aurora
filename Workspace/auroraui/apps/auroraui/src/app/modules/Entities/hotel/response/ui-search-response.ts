namespace ORXe_Flight_Response{
export interface UISearchResponse{
    itineraries: UIItinerary[];
    currency: string;
    totalResults: number;
    //optionalData: OptionalData5;
}
export interface UIItinerary{
    refId: number;
    journeys: UIJourney[];
    fareOptions: UIFareOption[];
}
export interface UIJourney{
    durationMins: number;
    airlineInfo: UIAirlineInfo;
    departureInfo: UIDeparture;
    arrivalInfo: UIArrival;
    flights: UIFlight[];
    noOfStops: number;
}
export interface UIAirlineInfo{
    code: string;
    name: string;
    imageUrl: string;
}
export interface UIFareOption {
    refId: string;
    supplierId: string;
    segments: UISegment[];
    fareType: string;
    attributes: string[];
    baseAmount: number;
    platingCarrier?: string;
    totalDiscount: number;
    totalFees: number;
    totalTaxes: number;
    totalAmount: number;
    purchaseOption: UIPurchaseOption;
    passengerFares: UIPassengerFare[];
    noOfavailableSeats: number;
    fareFamily: UIFareFamily;
}
export interface UISegment {
    flightRefId: number;
    cabinType: string;
    classOfService: string;
    seatMapAvailable: boolean;
    fareFamily: UIFareFamily;
}
export interface UIFareFamily {
    name: string;
    desc: string;
    attributes: UIFareFamilyAttributes;
    IsMixedClass?: boolean;
    isBranded?: boolean;
}
export interface UIFareFamilyAttributes {
    checked_baggage: string;
    carry_on: string;
    exchange: string;
    refund: string;
    seats: string;
    wifi: string;
    meal: string;
}
export interface UIPurchaseOption {
  cashCurrency: string;
  pointsCurrency: string;
  rewards: UIReward[];
}
export interface UIReward {
  recommendation: UIRewardRecommendation;
  isEligible: boolean;
  actualReward: UIActualReward;
}
export interface UIActualReward {
  cash: number;
  points: number;
}
export interface UIRewardRecommendation  {
  cash: number;
  points: number;
}
export interface UIPassengerFare {
  totalAmount: Number;
  passengerAmout: Number;
  fees: Number;
  passengerCount: Number;
}
export interface UIFlight {
    flightRefId: number;
    flightNumber: string;
    durationMins: number;
    marketingCarrier: string;
    operatingCarrier: string;
    departure: UIDeparture;
    arrival: UIArrival;
    numberOfStops: number;
    aircraftCode: string;
    aircraftName?: string;
    mileage: number;
    onTimePercentage: number;
    stops: any[];
    layoverInfo?: UILayoverInfo;
}
export interface UILayoverInfo {
  airport: UIAirport;
  durationMin: number;
  isChangeOfFlight: boolean;
}
export interface UIDeparture {
  time: string;
  departureDate: string;
  dateTime: string;
  airport: UIAirport;
}

export interface UIAirport {
  airportCode: string;
  airportName: string;
  stateCode: string;
  cityName: string;
  countryCode: string;
}
export interface UIArrival {
    time: string;
    day: string;
    dateTime: string;
    arrivalDate: string;
    airport: UIAirport;
}}
