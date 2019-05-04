import { Injectable } from '@angular/core';
// <reference path='../../entities/flight/response/engine-search-respone.ts'/>;
// <reference path='../../entities/flight/response/ui-search-response.ts'/>;

@Injectable({
  providedIn: 'root'  // <- ADD THIS
})
export class PurchaseOptionTranslator {

  public static Translate(request : ORXe_Flight_Response.PurchaseOption): ORXe_Flight_Response.UIPurchaseOption {

    const response = {} as ORXe_Flight_Response.UIPurchaseOption;
    response.rewards = [] as ORXe_Flight_Response.UIReward[];
    response.cashCurrency = request.cashCurrency;
    response.pointsCurrency = request.pointsCurrency;
    request.rewards.forEach(reward => {
      response.rewards.push({actualReward: {cash: reward.actualValue.cash, points: reward.actualValue.points}
      , isEligible: reward.isEligible, recommendation: {cash: reward.recommendation.cash, points: reward.recommendation.points}});
    });
    return response;
  }
}
