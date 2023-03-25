import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    ListingComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports: [ListingComponent]
})
export class ListingModule { }
