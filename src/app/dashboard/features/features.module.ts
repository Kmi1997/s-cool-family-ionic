import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParamsComponent } from './params/params.component';
import { FeatureComponent } from './feature/feature.component';
import { FeaturesRoutingModule } from './features.routing';
import { IonicModule } from '@ionic/angular';
import { ListingModule } from './components/listing/listing.module';


@NgModule({
  declarations: [
    ParamsComponent,
    FeatureComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    IonicModule.forRoot(),
    ListingModule
  ]
})
export class FeaturesModule { }
