import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { PassengerFareTranslator } from './passengerFareTranslator';
import { FareOptionTranslator } from './fareoptionTranslator';
// <reference path='../../entities/flight/response/engine-search-respone.ts'/>;
// <reference path='../../entities/flight/response/ui-search-response.ts'/>;
@Injectable({
  providedIn: 'root'  // <- ADD THIS
})
export class ResponseTranslator{
  //  constructor(engineSearchResponse : AirSearchResponse){}
    public translateToUI(engineSearchResponse: ORXe_Flight_Response.EngineSearchResponse):
    Observable<ORXe_Flight_Response.UISearchResponse> {
// tslint:disable-next-line: prefer-const
        let response = {} as  ORXe_Flight_Response.UISearchResponse;
        response.itineraries = [] as ORXe_Flight_Response.UIItinerary[];
        if (engineSearchResponse && engineSearchResponse.itineraries.length > 0) {
            engineSearchResponse.itineraries.forEach(itinerary => {
                response.itineraries.push(this.itineraryToUI(itinerary,
                    engineSearchResponse.airlines, engineSearchResponse.airports, engineSearchResponse.flights));
            });
            response.currency = engineSearchResponse.currency;
            response.totalResults = engineSearchResponse.totalResults;
        }
        return of(response);
        }

        private itineraryToUI(itinerary: ORXe_Flight_Response.Itinerary, airlines: ORXe_Flight_Response.Airline[],
          airports: ORXe_Flight_Response.Airport[], flights: ORXe_Flight_Response.Flight[]): ORXe_Flight_Response.UIItinerary{
// tslint:disable-next-line: prefer-const
            let uiItinerary = {} as ORXe_Flight_Response.UIItinerary;
            uiItinerary.journeys = [] as ORXe_Flight_Response.UIJourney[];
            uiItinerary.fareOptions = [] as ORXe_Flight_Response.UIFareOption[];
                if (itinerary && airlines && airports && flights){
                    uiItinerary.refId = itinerary.refId;
                    itinerary.journeys.forEach(journey => {
                        uiItinerary.journeys.push(this.journeyToUI(journey, airlines, airports, flights));
                    });
                    itinerary.fareOptions.forEach(fareOption => {
                        uiItinerary.fareOptions.push(FareOptionTranslator.translate(fareOption));
                    });

                }
                return uiItinerary;
        }
        private journeyToUI(journey: ORXe_Flight_Response.Journey, airlines: ORXe_Flight_Response.Airline[],
          airports: ORXe_Flight_Response.Airport[], flights: ORXe_Flight_Response.Flight[]): ORXe_Flight_Response.UIJourney{
            const uiJourney = {} as ORXe_Flight_Response.UIJourney;
            uiJourney.flights = [] as ORXe_Flight_Response.UIFlight[];
            journey.flightRefIds.forEach(refId => {
              const flight = flights.find( fl => fl.refId === refId);
              const departueAirport = airports.find(airport => airport.code === flight.departure.airportCode);
              const arrivalAirport = airports.find(airport => airport.code === flight.arrival.airportCode);
              uiJourney.flights.push({
                flightNumber: flight.flightNumber,
                flightRefId: flight.refId,
                durationMins: flight.durationMins,
                marketingCarrier: flight.marketingCarrier,
                operatingCarrier: flight.operatingCarrier,
                aircraftCode: flight.optionalData.aircraftCode,
                aircraftName: flight.optionalData.aircraftName,
                mileage: flight.optionalData.mileage,
                numberOfStops: flight.numberOfStops,
                onTimePercentage: flight.optionalData.onTimePercentage,
                stops: flight.optionalData.stops,
                layoverInfo: null,
                arrival: {airport: {airportCode: arrivalAirport.code, airportName: arrivalAirport.name, cityName: arrivalAirport.city.name,
                    stateCode: arrivalAirport.city.stateCode, countryCode: arrivalAirport.city.countryCode},
                    dateTime: flight.arrival.dateTime,
                    time: flight.arrival.dateTime.split('T')[1],
                     day: this.getDay(flight.departure.dateTime,flight.arrival.dateTime),
                    arrivalDate: flight.arrival.dateTime.split('T')[0]
                    },
                departure: {airport: {airportCode: departueAirport.code, airportName: departueAirport.name,
                  cityName: departueAirport.city.name,
                  stateCode: departueAirport.city.stateCode,countryCode: departueAirport.city.countryCode },
                  dateTime: flight.departure.dateTime,
                  time: flight.departure.dateTime.split('T')[1], departureDate: flight.departure.dateTime.split('T')[0]}});
              });
              this.setLayoverInfo(uiJourney.flights, journey.durationMins);
              const marketingAirline = airlines.find(airline => airline.code === uiJourney.flights[0].marketingCarrier);
              uiJourney.airlineInfo = {code: marketingAirline.code, name: marketingAirline.name, imageUrl: marketingAirline.logoUrl};
              const journeyDepartureAirport = uiJourney.flights[0].departure;
              const journeyArrivalAirport = uiJourney.flights[uiJourney.flights.length - 1].arrival;
              uiJourney.arrivalInfo =  journeyArrivalAirport;
              uiJourney.departureInfo = journeyDepartureAirport;
              uiJourney.noOfStops = journey.flightRefIds.length - 1;
              uiJourney.durationMins = journey.durationMins;
              return uiJourney;
            }

        private getDay(departureDateTime: string, arrivalDateTime: string): string {
          let day = '';
          const departDate = new Date(departureDateTime).getDate();
          const arrivalDate = new Date(arrivalDateTime).getDate();
          if (departDate !== arrivalDate)
          {
              let days = arrivalDate - departDate;
              switch (days)
              {
                  case 1:
                      day = 'Next Day Arrival';
                      break;
                  case 2:
                      day = 'Next to Next day';
                      break;
              }
          }
          return day;
        }

        private setLayoverInfo(flights: ORXe_Flight_Response.UIFlight[] , journeyDuration: number) {
          if (flights.length > 1) {
            for (let index = 0; index < flights.length-1; index++) {
                flights[index].layoverInfo = {} as ORXe_Flight_Response.UILayoverInfo;
                const difference = new Date(flights[index+1].departure.dateTime).valueOf() -
                new Date(flights[index].arrival.dateTime).valueOf();
                flights[index].layoverInfo.durationMin = difference / (1000 * 60);
                const isChangeOfFlight = flights[index].flightNumber !== flights[index].flightNumber;
                flights[index].layoverInfo.isChangeOfFlight = isChangeOfFlight;
                flights[index].layoverInfo.airport = flights[index].arrival.airport;                
            }
          }
        }
    }