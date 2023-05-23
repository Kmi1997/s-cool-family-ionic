import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { IonicModule } from '@ionic/angular';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {ButtonModule} from "../button/button.module";



@NgModule({
  declarations: [
    CardComponent
  ],
    imports: [
        CommonModule,
        IonicModule,
        ScrollingModule,
        ButtonModule
    ],
  exports: [CardComponent]
})
export class CardModule { }
