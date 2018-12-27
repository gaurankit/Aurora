import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { SearchResultComponent } from './hotel/search-result/search-result.component';
import { HomeComponent  } from './home/home.component';
import { SearchComponent } from './hotel/search/search.component';
import { HotelCardComponent } from './hotel/hotel-card/hotel-card.component';
import { LoaderComponent } from './loader/loader.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { HotelDetailsComponent } from './hotel/hotel-details/hotel-details.component';
import { SearchLocationComponent } from './search/search-location/search-location.component';
const routes: Routes = [
  
  {path:'home-slider', component: HomeSliderComponent },
  {path:'search-location', component: SearchLocationComponent },
  {path:'home', component: HomeComponent },
  {path:'hotel-details', component: HotelDetailsComponent },
  {path:'loader', component: LoaderComponent },
  {path:'search-result', component: SearchResultComponent },
  {path:'hotel-card', component: HotelCardComponent },
  {path:'', redirectTo: 'home',  pathMatch: 'full'},
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes),
  MatCardModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

