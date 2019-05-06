import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {StorageService} from '@Orxe/services'
import {SessionKeys} from '@Orxe/Core';

@Component({
  selector: 'app-room-loader',
  templateUrl: './roomloader.component.html',
  styleUrls: ['./roomloader.component.css']
})
export class RoomLoaderComponent implements OnInit {

  searchLocationName:string;
  searchLocationNameState:string;
  searchLocationNameCountry:string;
  searchStartDate:string;
  searchEndDate:string;
  selectedHotelName:string;

  constructor(private router: Router, private storageService : StorageService) { 

  }

  ngOnInit() {
    this.selectedHotelName = this.storageService.get(SessionKeys.SelectedHotelName);
    this.searchLocationName = this.storageService.get(SessionKeys.SearchLocationName);
    this.searchLocationNameState = this.storageService.get(SessionKeys.SearchLocationNameState);
    this.searchLocationNameCountry = this.storageService.get(SessionKeys.SearchLocationNameCountry);
    this.searchStartDate = this.storageService.get(SessionKeys.SearchStartDate);
    this.searchEndDate = this.storageService.get(SessionKeys.SearchEndDate);
  }
}
