import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { InternshipsComponent } from './internships/internships.component';
import { ParamsComponent } from './params/params.component';
import { RegistrationsComponent } from './registrations/registrations.component';

const routes: Routes = [

    { path: '', pathMatch: "full", redirectTo: '/dashboard/features/internships' },
    { path: "params", component: ParamsComponent },
    { path: "admins", component: AdminComponent },
    { path: "registrations", component: RegistrationsComponent },
    { path: "internships", component: InternshipsComponent }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeaturesRoutingModule { }
