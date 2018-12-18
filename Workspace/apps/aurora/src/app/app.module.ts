import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule} from '@angular/core';

import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule, Routes } from '@angular/router';

import { ComponentSharedModule  } from '@Aurora/component-shared';

import {DemoMaterialModule} from '../material-module';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { 
    path: '', 
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { 
    path: 'home', 
    component: HomeComponent 
  },
];


@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,    
    CommonModule,
    BrowserAnimationsModule,
    ComponentSharedModule,
    DemoMaterialModule,
    NxModule.forRoot(),
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  exports: [CommonModule, ComponentSharedModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
