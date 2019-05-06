import { Component, OnInit,OnChanges, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import {HotelSearchStatusRequest} from '../modules/Entities/hotel/request/hotel-search-status';
import {HotelSearchResultRequest} from '../modules/Entities/hotel/request/hotel-result';
import {SearchService, StorageService} from '@Orxe/services'
import {SessionKeys} from '@Orxe/Core';
import {GetStatusResponse} from '../modules/Entities/hotel/request/getStatus-response'; 

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  @Input() sessionId: string; 
  correlationId : string = "";
  public hotelSearchStatusRequest: HotelSearchStatusRequest;
  public hotelSearchResultRequest: HotelSearchResultRequest;
  statusResponse = {} as GetStatusResponse;

  searchLocationName:string;
  searchLocationNameState:string;
  searchLocationNameCountry:string;
  searchStartDate:string;
  searchEndDate:string;

  constructor(private router: Router, private searchService: SearchService, private storageService : StorageService) { 
    this.hotelSearchStatusRequest = new HotelSearchStatusRequest();
    this.hotelSearchResultRequest = new HotelSearchResultRequest();
  }

  ngOnInit() {
    this.searchLocationName = this.storageService.get(SessionKeys.SearchLocationName);
    this.searchLocationNameState = this.storageService.get(SessionKeys.SearchLocationNameState);
    this.searchLocationNameCountry = this.storageService.get(SessionKeys.SearchLocationNameCountry);
    this.searchStartDate = this.storageService.get(SessionKeys.SearchStartDate);
    this.searchEndDate = this.storageService.get(SessionKeys.SearchEndDate);
    this.getHotelResultStatus();
  }

  getHotelResultStatus(): void {
    this.sessionId =  this.storageService.get(SessionKeys.HotelInitSessionId);
    const searchRequest = this.hotelSearchStatusRequest.toServiceModel();
    searchRequest.sessionId=this.sessionId;
    this.getResultsStatus(searchRequest);
  }

  getHotelResult() {
    console.log("GetHotelResult Called.");
    this.sessionId = this.storageService.get(SessionKeys.HotelInitSessionId);
    const resultRequest = this.hotelSearchResultRequest.toServiceModel();
    resultRequest.sessionId=this.sessionId;
    resultRequest.filters.allowedCountry = this.storageService.get(SessionKeys.SearchLocationNameCountry);
    this.getResults(resultRequest);
  }

  getResults(postData){
    console.log(postData);
    this.searchService.getResults(postData,"").subscribe(hotelResultresponse=>{
      this.storageService.set(SessionKeys.HotelResultResponse,JSON.stringify(hotelResultresponse));
      this.router.navigate(['/search-result']);
    });
  }

  getResultsStatus(postData) {
    console.log("SessionID: - "+ this.sessionId);
    this.searchService.getStatus(postData, this.correlationId)
    .subscribe((resultStatus: GetStatusResponse) => { 
      this.statusResponse = resultStatus;
      if ( this.statusResponse.status === 'Complete' && this.statusResponse.hotelCount > 0) {
        console.log(this.statusResponse);
        this.storageService.set(SessionKeys.HotelResultCount,this.statusResponse.hotelCount.toString());
        console.log("Result Complete");
        this.getHotelResult();
      } else if (this.statusResponse.status === 'InProgress') {
        console.log("Search InProgress");
         setTimeout(() => 
              {
                this.getResultsStatus(postData);
              },2000);
      } else if (this.statusResponse.status !== 'InProgress' && this.statusResponse.hotelCount === 0) {
        console.log("Search InProgress & Hotel Count is 0.");
      }
      else{
        console.log(this.statusResponse);
      }
    });
  }

  getResultsRequest() {
    const resultRequest = this.hotelSearchResultRequest.toServiceModel();;
    resultRequest.sessionId = this.sessionId;
    return resultRequest;
  }
}
