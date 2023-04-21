import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleOrPluralPipe } from './single-or-plural/single-or-plural.pipe';
import {BooleanPipe} from "./booleanPipe/booleanPipe.pipe";
import { AdminOrUserPipe } from './adminOrUser/admin-or-user.pipe';




@NgModule({
  declarations: [SingleOrPluralPipe, BooleanPipe, AdminOrUserPipe],
  imports: [
    CommonModule
  ],
  exports: [SingleOrPluralPipe, BooleanPipe, AdminOrUserPipe]
})
export class PipeModule { }
