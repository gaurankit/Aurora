import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HotelSearchRequest} from '../../modules/Entities/hotel/request/hotel-search';
import {SearchService} from '../../services/search-service';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.css']
})
export class SearchLocationComponent implements OnInit {

  private sessionId: string;
  public hotelSearchRequest: HotelSearchRequest;

  constructor(private router: Router, private searchService: SearchService) {
    this.hotelSearchRequest = new HotelSearchRequest();
  }

  ngOnInit() { 
  }

  private initSearch = (postData) => {
    this.searchService.searchInit(postData).subscribe(response => { 
      console.log(response);
      this.sessionId = response['sessionId'];
      this.router.navigate(['air/result'], { queryParams: { sessionId: this.sessionId} });
    });
  }

}
