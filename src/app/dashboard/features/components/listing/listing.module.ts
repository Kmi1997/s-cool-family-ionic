import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing.component';
import { IonicModule } from '@ionic/angular';
import { PipeModule } from 'src/app/shared/pipe/pipe.module';


@NgModule({
  declarations: [
    ListingComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    PipeModule
  ],
  exports: [ListingComponent]
})
export class ListingModule { }
