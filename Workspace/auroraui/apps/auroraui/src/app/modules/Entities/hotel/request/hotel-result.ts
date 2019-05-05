export class HotelSearchResultRequest {

    toServiceModel = function () {
        let serviceModel = {
            "sessionId": "",
            "paging": {
              "pageNo": 1,
              "pageSize": 20,
              "orderBy": "rating desc,price asc"
           },
           "optionalDataPrefs": [
              "All"
           ],
           "currency": "USD",
           "contentPrefs": [
              "Basic",
              "images"
           ],
           "filters": {
              "minHotelPrice": 1,
              "maxHotelPrice": 10000,
              "minHotelRating": 1,
              "maxHotelRating": 5,
              "hotelChains": [],
              "allowedCountry": "FR"
           }
          };
      return serviceModel;
    }
  }