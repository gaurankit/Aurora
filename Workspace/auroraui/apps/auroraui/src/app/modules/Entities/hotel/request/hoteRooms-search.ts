export class HotelRoomSearchRequest {
  toServiceModel = function () {
    const serviceModel = {
      "sessionId": "",
      "hotelId": "",
      "currency": "USD"
    };
    return serviceModel;
  }
}