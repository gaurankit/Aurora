// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false
// };

export const environment = {
  production: false,
  isMockEnabled: false,
  hotelServiceBaseUrl: 'https://stage.cnxloyalty.com/hotel/v1.0/',
  hotelRoomServiceBaseUrl: 'https://stage.cnxloyalty.com/hotel/v1.0/rooms/',
  autosuggestServiceURL:'https://employeepurchase.cxtrvl.com/Services/HelperServices/SearchService.svc/Search',
  autosuggestServiceGetURL:'https://travel-capitaloneuat.cxtrvl.com/services/HelperServices/SearchService.svc/Search?q=la&type=airport&culture=en-US'
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
