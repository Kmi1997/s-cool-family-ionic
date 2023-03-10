import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Four0fourComponent } from './four0four.component';


const routes: Routes = [
    { path: '', component: Four0fourComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Four0fourRoutingModule { }
