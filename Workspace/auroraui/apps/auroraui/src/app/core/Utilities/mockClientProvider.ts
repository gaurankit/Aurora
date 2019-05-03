import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable(({ providedIn: 'root'}))//({ providedIn: 'root'})

export class MockClient {
  constructor(private http: HttpClient) {}
  mockUrl: string = environment.mockUrl;
  get(jsonUrl: string) {
    return this.http.get(environment.mockUrl + jsonUrl);
  }
}
