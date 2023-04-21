import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from "@ionic/angular";
import {CardModule} from "../../../../shared/components/card/card.module";
import {ButtonModule} from "../../../../shared/components/button/button.module";
import {PopupModule} from "../../../../shared/components/popup/popup.module";
import {AdminAddModule} from "../admin-add/admin-add.module";
import {AdminListingComponent} from "./admin-listing.component";
import {PipeModule} from "../../../../shared/pipe/pipe.module";

@NgModule({
  declarations: [AdminListingComponent],
  imports: [
    CommonModule,
    IonicModule,
    ButtonModule,
    AdminAddModule,
    PopupModule,
    PipeModule,
    CardModule
  ],
  exports: [AdminListingComponent]
})
export class AdminListingModule { }
