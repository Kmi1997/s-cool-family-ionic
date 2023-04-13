import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from "../button/button.module";
import {IonicModule} from "@ionic/angular";
import {AddButtonComponent} from "./add-button.component";


@NgModule({
  declarations: [AddButtonComponent],
  imports: [
    CommonModule,
    ButtonModule,
    IonicModule
  ],
  exports: [AddButtonComponent]
})
export class AddButtonModule { }
