import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { SearchLocationComponent } from '../../search/search-location/search-location.component';

@Component({
  selector: 'hotel-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open( SearchLocationComponent, {panelClass: 'filter-popup'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  }

}