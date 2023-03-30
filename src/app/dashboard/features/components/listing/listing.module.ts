import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing.component';
import { IonicModule } from '@ionic/angular';
import { PipeModule } from 'src/app/shared/pipe/pipe.module';
import { InternshipListingModule } from '../internship-listing/internship-listing.module';


@NgModule({
  declarations: [
    ListingComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    PipeModule,
    InternshipListingModule
  ],
  exports: [ListingComponent]
})
export class ListingModule { }
