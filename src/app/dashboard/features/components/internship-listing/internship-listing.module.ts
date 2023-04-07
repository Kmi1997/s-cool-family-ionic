import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternshipListingComponent } from './internship-listing.component';
import { IonicModule } from '@ionic/angular';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';

@NgModule({
  declarations: [InternshipListingComponent],
  imports: [
    CommonModule,
    IonicModule,
    CardModule,
    ButtonModule
  ],
  exports: [InternshipListingComponent]
})
export class InternshipListingModule { }
