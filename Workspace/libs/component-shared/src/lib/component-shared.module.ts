import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { DemoMaterialModule} from '@Aurora/material-module';

@NgModule({
  imports: [ CommonModule, DemoMaterialModule],
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent,
  ]
})
export class ComponentSharedModule {}
