import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing.component';
import { IonicModule } from '@ionic/angular';
import { InternshipListingModule } from '../internship-listing/internship-listing.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';
import { InternshipAddModule } from '../internship-add/internship-add.module';
import {AddButtonModule} from "../../../../shared/components/addButton/add-button.module";
import {PopupModule} from "../../../../shared/components/popup/popup.module";
import {RegistrationListingModule} from "../registration-listing/registration-listing.module";
import {RegistrationAddModule} from "../registration-add/registration-add.module";
import {AdminListingModule} from "../admin-listing/admin-listing.module";


@NgModule({
  declarations: [
    ListingComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    InternshipListingModule,
    ButtonModule,
    LoadingModule,
    InternshipAddModule,
    AddButtonModule,
    PopupModule,
    RegistrationListingModule,
    RegistrationAddModule,
    AdminListingModule
  ],
  exports: [ListingComponent]
})
export class ListingModule { }
