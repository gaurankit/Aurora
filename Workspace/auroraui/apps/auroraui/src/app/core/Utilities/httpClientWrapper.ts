import {HttpClient,HttpHeaders} from '@angular/common/http';
import {RequestObj} from './requestObj';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // <- ADD THIS
})
export class HttpClientWrapper{
    result: any;

    constructor(private httpClient:HttpClient){
    }

    public get(request:RequestObj){
    let headers = new HttpHeaders();
        request.httpHeaders.forEach(h => {
           headers = headers.append(h.key, h.value);
        });
        let options = { headers: headers };
        return this.httpClient.get(request.url,options);
    }

    public post(request:RequestObj){
        let headers = new HttpHeaders;
        request.httpHeaders.forEach(h=>{
          headers = headers.append(h.key,h.value);
        });
        let options = { headers: headers };
        return this.httpClient.post(request.url,request.body,options);
    }
}
