export class AutoSuggestRequest {
  toServiceModel = function () {
    let serviceModel = {
      "t": [
         "Airport"
       ],
       "c": null,
       "i": false,
       "a": false,
       "SEL": false,
       "q": ""
    };
    return serviceModel;
  }
}