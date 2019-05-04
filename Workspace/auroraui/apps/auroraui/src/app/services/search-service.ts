import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HotelSearchRequest} from '../modules/Entities/hotel/request/hotel-search';
import {HotelSearchStatusRequest} from '../modules/Entities/hotel/request/hotel-search-status';
import {HotelSearchResultRequest} from '../modules/Entities/hotel/request/hotel-result';
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
      console.log("Search service called 1.");
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
      return this.httpClientWrapper.post(this.requestObj) as Observable<ORXe_Hotel_Response.GetStatusResponse>;
  }

  getResults(request: HotelSearchRequest, correlationId:string) { 
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
}

