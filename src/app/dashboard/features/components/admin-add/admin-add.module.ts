import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminAddComponent} from "./admin-add.component";
import {IonicModule} from "@ionic/angular";
import {CardModule} from "../../../../shared/components/card/card.module";
import {ButtonModule} from "../../../../shared/components/button/button.module";
import {ReactiveFormsModule} from "@angular/forms";
import {LoadingModule} from "../../../../shared/components/loading/loading.module";



@NgModule({
  declarations: [AdminAddComponent],
  imports: [
    CommonModule,
    IonicModule,
    CardModule,
    ButtonModule,
    ReactiveFormsModule,
    LoadingModule
  ],
  exports : [AdminAddComponent]
})
export class AdminAddModule { }
