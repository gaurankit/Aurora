export class HotelRoomResultRequest {

  toServiceModel = function () {
      let serviceModel = {
        "sessionId": "",
        "hotelId": "",
        "optionalDataPrefs": [
           "All"
        ],
        "currency": "USD",
        "contentPrefs": ["Basic","images"]
        };
    return serviceModel;
  }
}