import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { SearchLocationComponent } from '../search/search-location/search-location.component';
import { Router } from '@angular/router';
import {HotelSearchRequest} from '../modules/Entities/hotel/request/hotel-search';
import {SearchService, StorageService,DataService} from '@Orxe/services';
import {SessionKeys} from '@Orxe/Core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit {

  private sessionId: string;
  public hotelSearchRequest: HotelSearchRequest;

  constructor(public dialog: MatDialog,private router: Router, private searchService: SearchService, 
    private storageService:StorageService,
    private dataService: DataService) {
      this.hotelSearchRequest = new HotelSearchRequest();
     } 

  ngOnInit() { 

  }

  private initSearch = (postData) => {
    console.log("Hotel init search fired.");
    console.log(postData);
    this.searchService.searchInit(postData).subscribe(response => { 
      console.log(response);
      console.log("Hotel init Response - "+ response['sessionId']);
      this.sessionId = response['sessionId'];
      this.storageService.set(SessionKeys.HotelInitSessionId,this.sessionId);
      this.router.navigate(['/loader'], { queryParams: { sessionId: this.sessionId} });
    });
  }
  
  hotelInitSearch(name,state,country,lat,lon): void {
    console.log("hotelInitSearch");
    const searchRequest = this.hotelSearchRequest.toServiceModel();

    searchRequest.stayPeriod.start = '2019-6-12';
    searchRequest.stayPeriod.end = '2019-6-15';
    //NewYork
    searchRequest.bounds.circle.center.lat = lat;
    searchRequest.bounds.circle.center.long = lon;
    searchRequest.filters.allowedCountry = country;

    this.storageService.set(SessionKeys.SearchLocationName,name);
    this.storageService.set(SessionKeys.SearchLocationNameState,state);
    this.storageService.set(SessionKeys.SearchLocationNameCountry,country);

    this.storageService.set(SessionKeys.SearchStartDate,'06-12-2019');
    this.storageService.set(SessionKeys.SearchEndDate,'06-15-2019');
    console.log(searchRequest);
    this.initSearch(searchRequest);
  }

}
