import { Component, OnInit } from '@angular/core';
import {StorageService} from '@Orxe/services'
import {SessionKeys} from '@Orxe/Core';

@Component({
  selector: 'hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent implements OnInit {

  hotelList;

  constructor(private storageService:StorageService) { }

  ngOnInit() {
    const sessionValue = this.storageService.get(SessionKeys.HotelResultResponse);
    this.hotelList=JSON.parse(sessionValue).hotels;
    console.log("Result Hotel List");
    console.log(this.hotelList);
  }

  genratePoints(dollerAmount): number {
    let amount = parseFloat(dollerAmount);
    return amount * 100;
  }

}
