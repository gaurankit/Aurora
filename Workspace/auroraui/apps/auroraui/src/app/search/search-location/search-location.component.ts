import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AIRPORTS} from '../../../assets/Json/airport';
import { Router } from '@angular/router';
import {AutoSuggestRequest} from '../../modules/Entities/autosuggest/autosuggest-request';
import {AutosuggestSearchService} from '../../services/autosuggest-search-service';
import {StorageService,DataService } from '@Orxe/services';
import {SessionKeys} from '@Orxe/Core';


/**
 * @title Filter autocomplete
 */
@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.component.html',
  styleUrls: ['./search-location.component.css']
})
export class SearchLocationComponent implements OnInit {
  myControl = new FormControl();
  options;
  filteredOptions: Observable<string[]>;

  public autoSuggestRequest: AutoSuggestRequest;
  public airportsObject;
  airportList;
  query: string = '';
  message:object;

  
  constructor(private router: Router, private autosuggestSearchService: AutosuggestSearchService, 
    private storageService:StorageService,
    private dataService: DataService) {
    this.autoSuggestRequest = new AutoSuggestRequest();
  }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message)
    this.options = new AIRPORTS().toServiceModel().airports;
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.IATA.toLowerCase().includes(filterValue));
  }

  selectOption(option){
    this.storageService.set(SessionKeys.SearchLocationName,option.name);
    this.storageService.set(SessionKeys.SearchLocationNameState,option.state);
    this.storageService.set(SessionKeys.SearchLocationNameCountry,option.country);
    this.storageService.set(SessionKeys.SearchLocationCode,option.IATA);
    this.storageService.set(SessionKeys.SearchLocationLat,option.lat);
    this.storageService.set(SessionKeys.SearchLocationLon,option.lon);
    this.dataService.changeMessage(option);
    const element: HTMLElement  = document.getElementById("btndialogClose") as HTMLElement;
    element.click();
  }

  change(event){
      console.log('Filter Called');
    this.airportsObject = new AIRPORTS().toServiceModel();
    this.airportList = this.airportsObject.airports.filter(option => option.IATA.toLowerCase().includes(this.query));
  }

  searchLocation(q) {
    const searchReq = this.autoSuggestRequest.toServiceModel();
    searchReq.q = q;
    this.GetLocations(searchReq);
  }


  private GetLocations = (postData) => {
    this.autosuggestSearchService.getLocations2(postData).subscribe(response => { 
      console.log(response);
    });
  }


}
















// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import {AutoSuggestRequest} from '../../modules/Entities/autosuggest/autosuggest-request';
// import {AutosuggestSearchService} from '../../services/autosuggest-search-service';
// import {AIRPORTS} from '../../../assets/Json/airport';

// @Component({
//   selector: 'app-search-location',
//   templateUrl: './search-location.component.html',
//   styleUrls: ['./search-location.component.css']
// })
// export class SearchLocationComponent implements OnInit {

//   private sessionId: string;
//   public autoSuggestRequest: AutoSuggestRequest;
//   public airportsObject;
//   airportList;
//   query: string = '';

//   constructor(private router: Router, private autosuggestSearchService: AutosuggestSearchService) {
//     this.autoSuggestRequest = new AutoSuggestRequest();
//   }

//   change(event){
//       console.log('Filter Called');
//     this.airportsObject = new AIRPORTS().toServiceModel();
//     this.airportList = this.airportsObject.airports.filter(option => option.IATA.toLowerCase().includes(this.query));
//   }

//   ngOnInit() { 
//     //this.searchLocation("DFW");
//     this.airportList=this.airportsObject;
//   }

//   searchLocation(q) {
//     const searchReq = this.autoSuggestRequest.toServiceModel();
//     searchReq.q = q;
//     this.GetLocations(searchReq);
//   }


//   private GetLocations = (postData) => {
//     this.autosuggestSearchService.getLocations2(postData).subscribe(response => { 
//       console.log(response);
//     });
//   }

// }
