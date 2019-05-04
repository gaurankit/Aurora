import { PassengerFareTranslator } from './passengerFareTranslator';
import {PurchaseOptionTranslator} from './purchaseOptionTranslator';

export class FareOptionTranslator {

  public static translate(request: ORXe_Flight_Response.FareOption): ORXe_Flight_Response.UIFareOption {
    const uiFareOption = {} as ORXe_Flight_Response.UIFareOption;
    const uiFareFamily = {} as ORXe_Flight_Response.UIFareFamily;
    uiFareOption.segments = [] as ORXe_Flight_Response.UISegment[];
    uiFareOption.refId = request.refId;
    uiFareOption.supplierId = request.supplierId;
    uiFareOption.baseAmount = request.baseAmount;
    uiFareOption.fareType = request.fareType;
    uiFareOption.platingCarrier = request.platingCarrier;
    uiFareOption.totalAmount = request.totalAmount;
    uiFareOption.totalDiscount = request.totalDiscount;
    uiFareOption.totalFees = request.totalFees;
    uiFareOption.totalTaxes = request.totalTaxes;
    uiFareOption.attributes = request.attributes;
    uiFareOption.passengerFares = [] as ORXe_Flight_Response.UIPassengerFare[];
    uiFareOption.passengerFares.push(PassengerFareTranslator.Translate(request.passengerFares));
    request.segments.forEach(segment => {
      uiFareOption.segments.push({cabinType: segment.cabinType, classOfService: segment.classOfService,
        fareFamily: segment.fareFamily ?
        {name: segment.fareFamily.name, desc: segment.fareFamily.desc,
          attributes: this.getFareFamilyAttributes(segment.fareFamily.attributes)}
        : uiFareFamily,
        flightRefId: segment.flightRefId, seatMapAvailable: segment.optionalData.seatMapAvailable});
    });
    uiFareOption.fareFamily = this.getFareFamily(uiFareOption.segments);
    uiFareOption.noOfavailableSeats = this.getAvailableSeats(request.segments);
    uiFareOption.purchaseOption = PurchaseOptionTranslator.Translate(request.purchaseOption);
    return uiFareOption;
  }
  private static getAvailableSeats(segments: ORXe_Flight_Response.Segment[]) {
    const seatsAvailableArray = segments.map((segment) => {
      return segment.optionalData.availableSeats;
    });
    return Math.min(...seatsAvailableArray);
  }
  private static getFareFamily(segments: ORXe_Flight_Response.UISegment[]) {
    const fareFamily = {} as ORXe_Flight_Response.UIFareFamily;
    const brandNameArray = segments.map((segment) => {

      if (Object.keys(segment.fareFamily).length > 0) {

        return segment.fareFamily.name;
         } else {
        return '';
      }});
    fareFamily.name = 'Mixed Class';
    fareFamily.isBranded = brandNameArray.length > 0 ? true : false;
    const isBrandNameSame = brandNameArray.every( (val, i, arr) => val === arr[0] && val !== '' );
    if (isBrandNameSame) {
      fareFamily.name = brandNameArray[0];
      fareFamily.desc = segments[0].fareFamily.desc;
      fareFamily.attributes = this.getFareFamilyAttributes(segments[0].fareFamily.attributes);
      } else {
        const cabinTypeArray = segments.map((segment) => {
          return segment.cabinType;
        });
        const isCabinTypeSame = cabinTypeArray.every( (val, i, arr) => val === arr[0] );
        if (isCabinTypeSame) {
          fareFamily.name = fareFamily.attributes ? cabinTypeArray[0] : cabinTypeArray[0] + ' Class';
        }
      }
      if(fareFamily.name === 'Mixed Class') {
        fareFamily.IsMixedClass = true;
      }
      return fareFamily;
    }

  public static getFareFamilyAttributes(attributes: ORXe_Flight_Response.Attributes) : ORXe_Flight_Response.UIFareFamilyAttributes {
    const fareFamilyAttributes = {} as  ORXe_Flight_Response.UIFareFamilyAttributes;
    fareFamilyAttributes.carry_on = attributes['carry_on'] ? attributes['carry_on'] : attributes['carry on'];
    fareFamilyAttributes.meal = attributes['meal'];
    fareFamilyAttributes.refund = attributes['refund'];
    fareFamilyAttributes.seats = attributes['seats'];
    fareFamilyAttributes.checked_baggage = attributes['checked_baggage'] ? attributes['checked_baggage'] : attributes['checked baggage'];
    fareFamilyAttributes.exchange = attributes['exchange'];
    fareFamilyAttributes.wifi = attributes['wifi'];
    return fareFamilyAttributes;
  }
}
