import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from "@ionic/angular";
import {PopupComponent} from "./popup.component";



@NgModule({
  declarations: [PopupComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [PopupComponent]
})
export class PopupModule { }
