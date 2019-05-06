import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { SearchLocationComponent } from '../../search/search-location/search-location.component';
import { Router } from '@angular/router';
import {HotelSearchRequest} from '../../modules/Entities/hotel/request/hotel-search';
import {SearchService, StorageService,DataService} from '@Orxe/services';
import {SessionKeys} from '@Orxe/Core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hotel-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {


  private sessionId: string;
  public hotelSearchRequest: HotelSearchRequest;
  locationName:string;
  location:object;
  locationLat:string;
  locationLon:string;
  checkInDate = new FormControl('');
  checkoutDate = new FormControl('');

  constructor(public dialog: MatDialog,private router: Router, private searchService: SearchService, 
    private storageService:StorageService,
    private dataService: DataService) { 
    this.hotelSearchRequest = new HotelSearchRequest();
  }
  openDialog() {
    const dialogRef = this.dialog.open( SearchLocationComponent, {panelClass: 'filter-popup'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() { 
    console.log("Home Reloaded");
    this.dataService.currentMessage.subscribe(message => {
      if(message!=undefined)
        this.locationName=message["name"];
      this.location = message;
    });
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
  
  hotelInitSearch(): void {
    const searchRequest = this.hotelSearchRequest.toServiceModel();

    searchRequest.stayPeriod.start = this.getFormattedDate(this.checkInDate.value,true);
    searchRequest.stayPeriod.end = this.getFormattedDate(this.checkoutDate.value,true);
    searchRequest.bounds.circle.center.lat = this.location["lat"];
    searchRequest.bounds.circle.center.long = this.location["lon"];

    this.storageService.set(SessionKeys.SearchStartDate,this.getFormattedDate(this.checkInDate.value,false));
    this.storageService.set(SessionKeys.SearchEndDate,this.getFormattedDate(this.checkoutDate.value,false));

    console.log(this.location);
    console.log(this.location["name"]);
    console.log(this.location["lat"]);
    console.log(this.location["lon"]);
    console.log(searchRequest.stayPeriod.start);
    console.log(searchRequest.stayPeriod.end);

    this.initSearch(searchRequest);
  }

  getFormattedDate(dateString,flip) {
    var todayTime = new Date(dateString);
    var month = todayTime.getMonth() + 1;
    var day = todayTime.getDate();
    var year = todayTime.getFullYear();
    if(flip===true)
      return year + "-" + month + "-" + day;
    else
      return month + "/" + day + "/" + year;
  }
}