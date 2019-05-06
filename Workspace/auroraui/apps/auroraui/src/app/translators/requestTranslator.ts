import {HttpHeader} from '@Orxe/Core';

// <reference path='../../entities/flight/request/serviceHeader.ts'/>;

export class RequestTranslator {
  //const serviceHeader =
  public static getHeadersInformation(headers: HttpHeader[]) {
    const httpHeaders = [] as HttpHeader[];
    httpHeaders.push({key: 'Accept', value: '*/*'});
    httpHeaders.push({key: 'Accept-Language', value: 'en-us'});
    httpHeaders.push({key: 'capi-accesskey', value: 'bab50b67-5fbd-4fd5-9308-eb71f791accd'});
    httpHeaders.push({key: 'Content-Type', value: 'application/json'});
    httpHeaders.push({key: 'oski-user-ip', value: '127.0.0.1'});

    if(headers && headers.length > 0){
      httpHeaders.concat(headers);
    }
    return httpHeaders;
  }

  public static getAutosuggestHeadersInformation(headers: HttpHeader[]) {
    const httpHeaders = [] as HttpHeader[];
    httpHeaders.push({key: 'Accept', value: '*/*'});
    httpHeaders.push({key: 'pragma', value: 'no-cache'});
    httpHeaders.push({key: 'cache-control', value: 'no-cache'});
    httpHeaders.push({key: 'Content-Type', value: 'application/json'});

    if(headers && headers.length > 0){
      httpHeaders.concat(headers);
    }
    return httpHeaders;
  }
}