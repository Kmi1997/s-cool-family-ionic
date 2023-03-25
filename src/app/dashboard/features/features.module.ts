import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationsComponent } from './registrations/registrations.component';
import { ParamsComponent } from './params/params.component';
import { InternshipsComponent } from './internships/internships.component';
import { AdminComponent } from './admin/admin.component';
import { FeaturesRoutingModule } from './features.routing';
import { IonicModule } from '@ionic/angular';
import { ListingModule } from './components/listing/listing.module';



@NgModule({
  declarations: [
    RegistrationsComponent,
    ParamsComponent,
    InternshipsComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    IonicModule.forRoot(),
    ListingModule

  ]
})
export class FeaturesModule { }
