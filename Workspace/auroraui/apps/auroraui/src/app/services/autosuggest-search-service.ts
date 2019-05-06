import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HotelSearchRequest} from '../modules/Entities/hotel/request/hotel-search';

import {environment} from '../../environments/environment';
import { RequestTranslator } from '../translators/requestTranslator';
import {HttpClientWrapper, RequestObj, HttpHeader} from '@Orxe/Core';

@Injectable({
  providedIn: 'root'
})
export class AutosuggestSearchService {
  constructor(private httpClientWrapper : HttpClientWrapper) { 

  }
  private requestObj = {} as RequestObj;
  getLocations(request: HotelSearchRequest): Observable<string> {
      console.log("Autosuggest service called.");
      const headers = [] as HttpHeader[];
      const httpHeaders = RequestTranslator.getAutosuggestHeadersInformation(headers);
      this.requestObj.httpHeaders = httpHeaders;
      this.requestObj.body = request;
      this.requestObj.url = environment.autosuggestServiceURL;
      return this.httpClientWrapper.post(this.requestObj) as Observable<string>;
  }

  getLocations2(request: HotelSearchRequest): Observable<string> {
    console.log("Autosuggest service called.");
    const headers = [] as HttpHeader[];
    const httpHeaders = RequestTranslator.getAutosuggestHeadersInformation(headers);
    this.requestObj.httpHeaders = httpHeaders;
    this.requestObj.body = request;
    this.requestObj.url = environment.autosuggestServiceGetURL;
    return this.httpClientWrapper.get(this.requestObj) as Observable<string>;
}
}

