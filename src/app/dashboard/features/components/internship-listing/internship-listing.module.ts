import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternshipListingComponent } from './internship-listing.component';
import { IonicModule } from '@ionic/angular';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import {InternshipAddModule} from "../internship-add/internship-add.module";
import {PopupModule} from "../../../../shared/components/popup/popup.module";

@NgModule({
  declarations: [InternshipListingComponent],
  imports: [
    CommonModule,
    IonicModule,
    CardModule,
    ButtonModule,
    InternshipAddModule,
    PopupModule
  ],
  exports: [InternshipListingComponent]
})
export class InternshipListingModule { }
