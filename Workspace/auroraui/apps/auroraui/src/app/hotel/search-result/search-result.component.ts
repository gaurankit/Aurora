import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { FilterComponent } from '../filter/filter.component';
import {SearchService, StorageService} from '@Orxe/services'
import {SessionKeys} from '@Orxe/Core';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  hotelCount;
  searchLocationName:string;
  searchLocationNameState:string;
  searchLocationNameCountry:string;
  searchStartDate:string;
  searchEndDate:string;

  constructor(public dialog: MatDialog,private storageService : StorageService) { }
  openDialog() {
    const dialogRef = this.dialog.open( FilterComponent, {panelClass: 'filter-popup'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
    this.searchLocationName = this.storageService.get(SessionKeys.SearchLocationName);
    this.searchLocationNameState = this.storageService.get(SessionKeys.SearchLocationNameState);
    this.searchLocationNameCountry = this.storageService.get(SessionKeys.SearchLocationNameCountry);
    this.searchStartDate = this.storageService.get(SessionKeys.SearchStartDate);
    this.searchEndDate = this.storageService.get(SessionKeys.SearchEndDate);
    this.hotelCount =  this.storageService.get(SessionKeys.HotelResultCount);
  }

}
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    if(document.getElementById('filter-tabs') != null)
      document.getElementById('filter-tabs').style.bottom = "0";
  } else {
    if(document.getElementById('filter-tabs') != null)
      document.getElementById('filter-tabs').style.bottom = "-50px";
  }
  prevScrollpos = currentScrollPos;
}