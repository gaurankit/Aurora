import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { FilterComponent } from '../filter/filter.component';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open( FilterComponent, {panelClass: 'filter-popup'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  }

}
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('filter-tabs').style.bottom = "0";
  } else {
    document.getElementById('filter-tabs').style.bottom = "-50px";
  }
  prevScrollpos = currentScrollPos;
}