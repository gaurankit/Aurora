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
         "start": "2019-06-30",
         "end": "2019-07-02"
      },
      "filters": {
         "minHotelPrice": 1,
         "maxHotelPrice": 10000,
         "minHotelRating": 1,
         "maxHotelRating": 5,
         "hotelChains": [],
         "allowedCountry": "US"
      },
      "travellerCountryCodeOfResidence": "US",
      "travellerNationalityCode": "US",
      "includeHotelsWithoutRates": false,
      "bounds": {
         "circle": {
            "center": {
               "lat": 36.086010,
               "long": -115.153969
            },
            "radiusKm": 50.5
         }
      }
    };
    return serviceModel;
  }
}