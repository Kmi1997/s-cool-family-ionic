import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationsComponent } from './registrations/registrations.component';
import { ParamsComponent } from './params/params.component';
import { InternshipsComponent } from './internships/internships.component';
import { AdminComponent } from './admin/admin.component';
import { FeaturesRoutingModule } from './features.routing';
import { FeaturesComponent } from './features.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    RegistrationsComponent,
    ParamsComponent,
    InternshipsComponent,
    AdminComponent,
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    IonicModule.forRoot()
  ]
})
export class FeaturesModule { }
