import { Component, OnInit } from '@angular/core';
import {SearchService, StorageService} from '@Orxe/services'
import {SessionKeys} from '@Orxe/Core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {

  roomResponse;

  constructor(private storageService : StorageService,private router: Router) { }

  ngOnInit() {
    const roomResponse = this.storageService.get(SessionKeys.HotelRoomsResponse);
    this.roomResponse = JSON.parse(roomResponse);
  }

  genratePoints(dollerAmount): string {
    const amount = parseFloat(dollerAmount);
    return (amount * 100).toFixed(0);
  }

  genrateOffer(dollerAmount): number {
    let amount = parseInt(dollerAmount);
    return amount + 100;
  }
}
