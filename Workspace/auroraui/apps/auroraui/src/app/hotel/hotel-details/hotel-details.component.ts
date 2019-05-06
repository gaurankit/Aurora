import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material';
import { RoomDetailComponent } from '../../hotel/room-detail/room-detail.component';
import {SearchService, StorageService} from '@Orxe/services';
import {SessionKeys} from '@Orxe/Core';
import { ActivatedRoute} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import {HotelRoomSearchRequest} from '../../modules/Entities/hotel/request/hoteRooms-search';
import {GetRoomsStatusResponse} from '../../modules/Entities/hotel/request/getStatus-response';
import {HotelRoomSearchStatusRequest} from '../../modules/Entities/hotel/request/hotel-roomsearch-status';
import {HotelRoomResultRequest} from '../../modules/Entities/hotel/request/hotel-room-results';



@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

  public hotel;
  mapURL;
  private sessionId: string;
  correlationId : string = "";
  statusResponse = {} as GetRoomsStatusResponse;
  public hotelRoomSearchRequest: HotelRoomSearchRequest;
  public hotelRoomSearchStatusRequest: HotelRoomSearchStatusRequest;
  public hotelRoomResultRequest: HotelRoomResultRequest;

  constructor(public dialog: MatDialog,private storageService:StorageService,private searchService: SearchService,private route: ActivatedRoute,
    public sanitizer: DomSanitizer,private router: Router) {
    this.hotelRoomSearchRequest = new HotelRoomSearchRequest();
    this.hotelRoomSearchStatusRequest = new  HotelRoomSearchStatusRequest();
    this.hotelRoomResultRequest = new  HotelRoomResultRequest();
   }
  openDialog() {
    const dialogRef = this.dialog.open( RoomDetailComponent, {panelClass: 'filter-popup'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.router.navigate(['/hotel-details']);
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
        this.storageService.set(SessionKeys.SelectedHotelName,hotel.name);
        const url = "https://www.google.com/maps/@?api=1&map_action=map&center=36.1296,-115.173&zoom=12";
        this.mapURL = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      }
    }.bind(this));
    this.storageService.set(SessionKeys.HotelRoomsResponse,null);
  }

  hotelRoomsInit(): void {
    const roomSearchRequest = this.hotelRoomSearchRequest.toServiceModel();
    roomSearchRequest.sessionId=this.storageService.get(SessionKeys.HotelInitSessionId);
    roomSearchRequest.hotelId=this.storageService.get(SessionKeys.SelectedHotelId);
    this.initRoomSearch(roomSearchRequest);
  }

  private initRoomSearch = (postData) => {
    console.log("Hotel init search fired.");
    this.router.navigate(['/roomloader']);
    this.searchService.roomsInit(postData).subscribe(response => { 
      console.log("Hotel init Response - "+ response['sessionId']);
      this.getHotelRoomResultStatus();
    });
  }

  getHotelRoomResultStatus(): void {
    const searchRequest = this.hotelRoomSearchStatusRequest.toServiceModel();
    searchRequest.sessionId = this.storageService.get(SessionKeys.HotelInitSessionId);
    searchRequest.hotelId = this.storageService.get(SessionKeys.SelectedHotelId);
    this.getRoomResultsStatus(searchRequest);
  }

  getRoomResultsStatus(postData) {
    console.log("SessionID: - "+ this.sessionId);
    this.searchService.getRoomsStatus(postData, this.correlationId)
    .subscribe((resultStatus: GetRoomsStatusResponse) => { 
      this.statusResponse = resultStatus;
      if ( this.statusResponse.status === 'Complete' && this.statusResponse.hotelId !== 0) {
        console.log(this.statusResponse);
        console.log("Room Search Complete");
        this.getHotelRooms();
      } else if (this.statusResponse.status === 'InProgress') {
        console.log("Room Search InProgress");
         setTimeout(() => 
              {
                this.getRoomResultsStatus(postData);
              },2000);
      }
      else {
        console.log(this.statusResponse);
      }
    });
  }

  getHotelRooms() {
    console.log("GetHotelRooms Called.");
    const getRoomsRequest = this.hotelRoomResultRequest.toServiceModel();
    getRoomsRequest.sessionId = this.storageService.get(SessionKeys.HotelInitSessionId);
    getRoomsRequest.hotelId = this.storageService.get(SessionKeys.SelectedHotelId);
    this.getRooms(getRoomsRequest);
  }

  getRooms(postData){
    this.searchService.getRooms(postData,"").subscribe(hotelRoomsResponse=>{
      this.storageService.set(SessionKeys.HotelRoomsResponse,JSON.stringify(hotelRoomsResponse));
      console.log("**********************GetHotelRooms Successful**************************");
      this.openDialog();
    });
  }

}
