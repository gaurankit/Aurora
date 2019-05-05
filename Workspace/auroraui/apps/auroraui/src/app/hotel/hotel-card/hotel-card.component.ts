import { Component, OnInit } from '@angular/core';
import {StorageService} from '@Orxe/services'
import {SessionKeys} from '@Orxe/Core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent implements OnInit {

  hotelList;

  constructor(private storageService:StorageService,private router: Router) { }

  ngOnInit() {
    const sessionValue = this.storageService.get(SessionKeys.HotelResultResponse);
    this.hotelList=JSON.parse(sessionValue).hotels;
    console.log("Result Hotel List");
  }

  genratePoints(dollerAmount): number {
    let amount = parseFloat(dollerAmount);
    return amount * 100;
  }

  goToHotelDetails(hotelID): void {
    this.storageService.set(SessionKeys.SelectedHotelId,hotelID);
    this.router.navigate(['/hotel-details']);
  }

}
