import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard.routing';
import { IonicModule } from '@ionic/angular';
import { DashboardComponent } from './dashboard.component';
import { ConnectionComponent } from './connection/connection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from "../shared/components/button/button.module";



@NgModule({
  declarations: [
    DashboardComponent,
    ConnectionComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
