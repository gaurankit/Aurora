import {HttpHeader} from '@Orxe/Core';

// <reference path='../../entities/flight/request/serviceHeader.ts'/>;

export class RequestTranslator {
  //const serviceHeader =
  public static getHeadersInformation(headers: HttpHeader[]) {
    const httpHeaders = [] as HttpHeader[];
    // httpHeaders.push({key: 'Content-Type', value: 'application/json'});
    // httpHeaders.push({key: 'Accept-Language', value: 'en-us'});
    // httpHeaders.push({key: 'programId', value: '1389'});
    // httpHeaders.push({key: 'cnx-tenantId', value: '3em3vu4c1s0'});
    // httpHeaders.push({key: 'cnx-environment-token', value: 'T6'});

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
}
