import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { IonicModule } from '@ionic/angular';
import { ScrollingModule } from '@angular/cdk/scrolling';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ScrollingModule
  ],
  exports: [CardComponent]
})
export class CardModule { }
