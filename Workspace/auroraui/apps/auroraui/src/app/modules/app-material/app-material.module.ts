import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatExpansionModule, MatFormFieldModule,
  MatInputModule, MatCheckboxModule, MatDialogModule, MatButtonToggleModule,
   MatNativeDateModule, MatDatepickerModule, MatSelectModule,MatToolbarModule, MatTabsModule} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatSelectModule,
    MatToolbarModule,
    MatTabsModule
  ],
  exports: [
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatTabsModule
  ],
  declarations: []
})
export class AppMaterialModule { }
