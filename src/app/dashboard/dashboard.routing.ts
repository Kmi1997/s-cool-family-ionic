import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesGuard } from '../shared/guard/features.guard';
import { ConnectionComponent } from './connection/connection.component';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [

    {
        path: '', component: DashboardComponent, children: [
            { path: 'connection', component: ConnectionComponent },
            { path: 'features', canLoad: [FeaturesGuard], loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) },
        ]
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
