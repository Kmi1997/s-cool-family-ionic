import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistrationAddComponent} from "./registration-add.component";
import {IonicModule} from "@ionic/angular";
import {ButtonModule} from "../../../../shared/components/button/button.module";
import {LoadingModule} from "../../../../shared/components/loading/loading.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CardModule} from "../../../../shared/components/card/card.module";



@NgModule({
  declarations: [RegistrationAddComponent],
  imports: [
    CommonModule,
    IonicModule,
    ButtonModule,
    LoadingModule,
    ReactiveFormsModule,
    CardModule
  ],
  exports: [RegistrationAddComponent]
})
export class RegistrationAddModule { }
