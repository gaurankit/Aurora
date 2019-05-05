import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {StorageService} from '@Orxe/services'

@Component({
  selector: 'app-room-loader',
  templateUrl: './roomloader.component.html',
  styleUrls: ['./roomloader.component.css']
})
export class RoomLoaderComponent implements OnInit {

  constructor(private router: Router, private storageService : StorageService) { 

  }

  ngOnInit() {
  }
}
