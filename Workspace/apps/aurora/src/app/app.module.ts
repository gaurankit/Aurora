import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { ComponentSharedModule } from '@Aurora/component-shared';
import {DemoMaterialModule} from '../material-module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentSharedModule,
    DemoMaterialModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [],
  exports: [ComponentSharedModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
