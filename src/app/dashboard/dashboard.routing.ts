import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesGuard } from '../shared/guard/features.guard';
import { HomeGuard } from '../shared/guard/home.guard';
import { ConnectionComponent } from './connection/connection.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

    {
        path: '', component: DashboardComponent, children: [
            { path: 'connection', component: ConnectionComponent },
            { path: 'features', canLoad: [FeaturesGuard], loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) },
            { path: 'home', canActivate: [HomeGuard], component: HomeComponent }
        ]
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
