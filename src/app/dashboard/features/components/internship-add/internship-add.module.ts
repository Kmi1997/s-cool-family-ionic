import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternshipAddComponent } from './internship-add.component';
import { IonicModule } from '@ionic/angular';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InternshipAddComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    CardModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  exports: [InternshipAddComponent]
})
export class InternshipAddModule { }
