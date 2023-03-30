import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature/feature.component';
import { ParamsComponent } from './params/params.component';


const routes: Routes = [

    { path: '', pathMatch: "full", redirectTo: '/dashboard/features/internship' },
    { path: "internship", component: FeatureComponent },
    { path: "admin", component: FeatureComponent },
    { path: "registration", component: FeatureComponent },
    { path: "param", component: ParamsComponent }

];
//
//
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeaturesRoutingModule { }
