import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistrationListingComponent} from "./registration-listing.component";
import {IonicModule} from "@ionic/angular";
import {LoadingModule} from "../../../../shared/components/loading/loading.module";
import {PopupModule} from "../../../../shared/components/popup/popup.module";
import {CardModule} from "../../../../shared/components/card/card.module";
import {ButtonModule} from "../../../../shared/components/button/button.module";
import {PipeModule} from "../../../../shared/pipe/pipe.module";
import {RegistrationAddModule} from "../registration-add/registration-add.module";
import {InternshipAddModule} from "../internship-add/internship-add.module";



@NgModule({
  declarations: [RegistrationListingComponent],
  imports: [
    CommonModule,
    IonicModule,
    LoadingModule,
    PopupModule,
    CardModule,
    ButtonModule,
    PipeModule,
    RegistrationAddModule,
    InternshipAddModule
  ],
  exports: [RegistrationListingComponent]
})
export class RegistrationListingModule { }
