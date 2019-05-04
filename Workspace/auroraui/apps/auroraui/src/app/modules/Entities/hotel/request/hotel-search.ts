export class HotelSearchRequest {

  toServiceModel = function () {
    let serviceModel = {
      "currency": "USD",
      "roomOccupancies": [
         {
            "occupants": [
               {
                  "type": "Adult",
                  "age": 25
               }
            ]
         }
      ],
      "stayPeriod": {
         "start": "2019-05-30",
         "end": "2019-06-02"
      },
      "filters": {
         "minHotelPrice": 1,
         "maxHotelPrice": 10000,
         "minHotelRating": 1,
         "maxHotelRating": 5,
         "hotelChains": [
            "Novotel",
            "Marriott",
            "Hilton",
            "Accor"
         ],
         "allowedCountry": "FR"
      },
      "travellerCountryCodeOfResidence": "US",
      "travellerNationalityCode": "US",
      "includeHotelsWithoutRates": false,
      "bounds": {
         "circle": {
            "center": {
               "lat": 49.0097,
               "long": 2.5479
            },
            "radiusKm": 50.5
         }
      }
    };
    return serviceModel;
  }
}