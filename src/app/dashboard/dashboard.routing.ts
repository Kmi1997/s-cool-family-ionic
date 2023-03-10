import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectGuard } from '../shared/guard/connection.guard';
import { HomeGuard } from '../shared/guard/home.guard';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

    { path: '', pathMatch: "full", redirectTo: '/dashboard/home' },
    { path: 'connection', loadChildren: () => import('./connection/connection.module').then(m => m.ConnectionModule) },
    { path: 'features', canLoad: [ConnectGuard], loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) },
    { path: 'home', canActivate: [HomeGuard], component: HomeComponent }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
