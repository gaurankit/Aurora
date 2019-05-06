// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    isMockEnabled: false,
    hotelServiceBaseUrl: 'https://stage.cnxloyalty.com/hotel/v1.0/',
    hotelRoomServiceBaseUrl: 'https://stage.cnxloyalty.com/hotel/v1.0/rooms/',
    autosuggestServiceURL:'https://employeepurchase.cxtrvl.com/Services/HelperServices/SearchService.svc/Search',
    autosuggestServiceGetURL:'https://travel-capitaloneuat.cxtrvl.com/services/HelperServices/SearchService.svc/Search?q=la&type=airport&culture=en-US'
  };
  
