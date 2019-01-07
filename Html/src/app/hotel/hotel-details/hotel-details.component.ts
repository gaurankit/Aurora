import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { RoomDetailComponent } from '../../hotel/room-detail/room-detail.component';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  constructor(public dialog: MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open( RoomDetailComponent, {panelClass: 'filter-popup'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  ngOnInit() {
  }

}
