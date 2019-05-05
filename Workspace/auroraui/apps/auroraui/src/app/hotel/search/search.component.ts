import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { SearchLocationComponent } from '../../search/search-location/search-location.component';
import { Router } from '@angular/router';
import {HotelSearchRequest} from '../../modules/Entities/hotel/request/hotel-search';
import {SearchService, StorageService} from '@Orxe/services';
import {SessionKeys} from '@Orxe/Core';

@Component({
  selector: 'hotel-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {


  private sessionId: string;
  public hotelSearchRequest: HotelSearchRequest;

  constructor(public dialog: MatDialog,private router: Router, private searchService: SearchService, private storageService:StorageService) { 
    this.hotelSearchRequest = new HotelSearchRequest();
  }
  openDialog() {
    const dialogRef = this.dialog.open( SearchLocationComponent, {panelClass: 'filter-popup'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
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
  
  hotelInitSearch(): void {
    const searchRequest = this.hotelSearchRequest.toServiceModel();
    //searchRequest.passengers =  searchRequest.passengers.filter(passenger => passenger.count !== 0);
    this.initSearch(searchRequest);
  }
}