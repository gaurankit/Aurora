import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { DemoMaterialModule} from '@Aurora/material-module';

import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [ 
    CommonModule, 
    DemoMaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent,
  ]
})
export class ComponentSharedModule {}
