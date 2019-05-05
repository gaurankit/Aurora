import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HotelSearchRequest} from '../modules/Entities/hotel/request/hotel-search';
import {HotelRoomSearchRequest} from '../modules/Entities/hotel/request/hoteRooms-search';
import {HotelSearchStatusRequest} from '../modules/Entities/hotel/request/hotel-search-status';
import {HotelRoomSearchStatusRequest} from '../modules/Entities/hotel/request/hotel-roomsearch-status';
import {HotelSearchResultRequest} from '../modules/Entities/hotel/request/hotel-result';
import {HotelRoomResultRequest} from '../modules/Entities/hotel/request/hotel-room-results';
import {GetStatusResponse,GetRoomsStatusResponse} from '../modules/Entities/hotel/request/getStatus-response';

import {environment} from '../../environments/environment';
import { RequestTranslator } from '../translators/requestTranslator';
import {HttpClientWrapper, RequestObj, HttpHeader} from '@Orxe/Core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private httpClientWrapper : HttpClientWrapper) { 

  }
  private requestObj = {} as RequestObj;
  searchInit(request: HotelSearchRequest): Observable<string> {
      console.log("Search service called.");
      const headers = [] as HttpHeader[];
          headers.push({key: 'oski-correlationid', value: ''});
        const httpHeaders = RequestTranslator.getHeadersInformation(headers);
        this.requestObj.httpHeaders = httpHeaders;
        this.requestObj.body = request;
        this.requestObj.url = environment.hotelServiceBaseUrl + 'search/init';
        console.log(this.requestObj);
        return this.httpClientWrapper.post(this.requestObj) as Observable<string>;
  }


  getStatus(request: HotelSearchStatusRequest, correlationId:string) { 
    console.log("Search service GetStatus called.");
    console.log(request);
      const headers = [] as HttpHeader[];
        headers.push({key: 'cnx-correlationId', value: correlationId});
      const httpHeaders = RequestTranslator.getHeadersInformation(headers);
      this.requestObj.body = request;
      this.requestObj.url = environment.hotelServiceBaseUrl + 'search/status';
      this.requestObj.httpHeaders = httpHeaders;
      console.log(this.requestObj);
      return this.httpClientWrapper.post(this.requestObj) as Observable<GetStatusResponse>;
  }

  getResults(request: HotelSearchResultRequest, correlationId:string) { 
    console.log("Search service GetResults called.");
    console.log(request);
      const headers = [] as HttpHeader[];
        headers.push({key: 'cnx-correlationId', value: correlationId});
      const httpHeaders = RequestTranslator.getHeadersInformation(headers);
      this.requestObj.body = request;
      this.requestObj.url = environment.hotelServiceBaseUrl + 'search/results';
      this.requestObj.httpHeaders = httpHeaders;
      console.log(this.requestObj);
      return this.httpClientWrapper.post(this.requestObj) as Observable<string>;
  }

  roomsInit(request: HotelRoomSearchRequest): Observable<string> {
    console.log("Room Search service called.");
      const headers = [] as HttpHeader[];
          headers.push({key: 'oski-correlationid', value: ''});
        const httpHeaders = RequestTranslator.getHeadersInformation(headers);
        this.requestObj.httpHeaders = httpHeaders;
        this.requestObj.body = request;
        this.requestObj.url = environment.hotelRoomServiceBaseUrl + 'search/init';
        console.log(this.requestObj);
        return this.httpClientWrapper.post(this.requestObj) as Observable<string>;
  }


  getRoomsStatus(request: HotelRoomSearchStatusRequest, correlationId:string) { 
    console.log("Search service GetStatus called.");
    console.log(request);
      const headers = [] as HttpHeader[];
        headers.push({key: 'cnx-correlationId', value: correlationId});
      const httpHeaders = RequestTranslator.getHeadersInformation(headers);
      this.requestObj.body = request;
      this.requestObj.url = environment.hotelRoomServiceBaseUrl + 'search/status';
      this.requestObj.httpHeaders = httpHeaders;
      console.log(this.requestObj);
      return this.httpClientWrapper.post(this.requestObj) as Observable<GetRoomsStatusResponse>;
  }

  getRooms(request: HotelRoomResultRequest, correlationId:string) { 
    console.log("Search service GetResults called.");
    console.log(request);
      const headers = [] as HttpHeader[];
        headers.push({key: 'cnx-correlationId', value: correlationId});
      const httpHeaders = RequestTranslator.getHeadersInformation(headers);
      this.requestObj.body = request;
      this.requestObj.url = environment.hotelRoomServiceBaseUrl + 'search/results';
      this.requestObj.httpHeaders = httpHeaders;
      console.log(this.requestObj);
      return this.httpClientWrapper.post(this.requestObj) as Observable<string>;
  }
}

