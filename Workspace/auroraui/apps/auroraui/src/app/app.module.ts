import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {NgModule} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDividerModule} from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatListModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { SearchResultComponent } from './hotel/search-result/search-result.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './hotel/search/search.component';
import { HotelCardComponent } from './hotel/hotel-card/hotel-card.component';
import { LoaderComponent } from './loader/loader.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { FooterComponent } from './footer/footer.component';
import { FilterComponent } from './hotel/filter/filter.component';
import { HotelDetailsComponent } from './hotel/hotel-details/hotel-details.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import { StarRatingComponent } from './star-rating/star-rating.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatChipsModule} from '@angular/material/chips';
import { SearchLocationComponent } from './search/search-location/search-location.component';
import { RoomDetailComponent } from './hotel/room-detail/room-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from './modules/app-material/app-material.module';
import { RoomLoaderComponent } from './room-loader/roomloader.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeNavComponent,
    SearchResultComponent,
    HomeComponent,
    SearchComponent,
    HotelCardComponent,
    LoaderComponent,
    HomeSliderComponent,
    FooterComponent,
    FilterComponent,
    HotelDetailsComponent,
    StarRatingComponent,
    SearchLocationComponent,
    RoomDetailComponent,
    RoomLoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatTabsModule,
    MatChipsModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    MatSelectModule,
    MatToolbarModule,
    MatGridListModule,
    MatSidenavModule,
    MatExpansionModule,
    LayoutModule,
    MatDividerModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatListModule,
    RouterModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    HttpClientModule,
    FormsModule,
    AppMaterialModule
  ],
  entryComponents: [
    FilterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { AppMaterialModule } from './modules/app-material/app-material.module';
// import { AppComponent } from './app.component';


// import { AppRoutingModule } from './app-routing.module';
// import { HomeNavComponent } from './home-nav/home-nav.component';
// import { LayoutModule } from '@angular/cdk/layout';
// import { SearchResultComponent } from './hotel/search-result/search-result.component';
// import { HomeComponent } from './home/home.component';
// import { SearchComponent } from './hotel/search/search.component';
// import { HotelCardComponent } from './hotel/hotel-card/hotel-card.component';
// import { LoaderComponent } from './loader/loader.component';
// import { HomeSliderComponent } from './home-slider/home-slider.component';
// import { FooterComponent } from './footer/footer.component';
// import { FilterComponent } from './hotel/filter/filter.component';
// import { HotelDetailsComponent } from './hotel/hotel-details/hotel-details.component';
// import { StarRatingComponent } from './star-rating/star-rating.component';
// import { SearchLocationComponent } from './search/search-location/search-location.component';
// import { RoomDetailComponent } from './hotel/room-detail/room-detail.component';




// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeNavComponent,
//     SearchResultComponent,
//     HomeComponent,
//     SearchComponent,
//     HotelCardComponent,
//     LoaderComponent,
//     HomeSliderComponent,
//     FooterComponent,
//     FilterComponent,
//     HotelDetailsComponent,
//     StarRatingComponent,
//     SearchLocationComponent,
//     RoomDetailComponent,
//   ],
//   imports: [
//     FormsModule,
//     AppMaterialModule
//     ],
//   providers: [],
//   bootstrap: [AppComponent],
//   entryComponents: [AppComponent]
// })
// export class AppModule {

//   constructor(){}
// }
