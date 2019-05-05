import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { RoomDetailComponent } from '../../hotel/room-detail/room-detail.component';
import {StorageService} from '@Orxe/services'
import {SessionKeys} from '@Orxe/Core';
import { Router, ActivatedRoute} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

  public hotel;
  mapURL;

  constructor(public dialog: MatDialog,private storageService:StorageService,private route: ActivatedRoute,public sanitizer: DomSanitizer) { }
  openDialog() {
    const dialogRef = this.dialog.open( RoomDetailComponent, {panelClass: 'filter-popup'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  ngOnInit() {
    const hotelID = this.storageService.get(SessionKeys.SelectedHotelId);
    console.log("HotelId:" + hotelID);
    const sessionValue = this.storageService.get(SessionKeys.HotelResultResponse);
    const hotelList = JSON.parse(sessionValue).hotels;
    hotelList.forEach(function (hotel) {
      if(hotel.id === hotelID){
        this.hotel = hotel;
        const url = "https://www.google.com/maps/@?api=1&map_action=map&center=36.1296,-115.173&zoom=12";
        this.mapURL = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      }
    }.bind(this)); 
  }

}
