import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleOrPluralPipe } from './single-or-plural/single-or-plural.pipe';
import {BooleanPipe} from "./booleanPipe/booleanPipe.pipe";




@NgModule({
  declarations: [SingleOrPluralPipe, BooleanPipe],
  imports: [
    CommonModule
  ],
  exports: [SingleOrPluralPipe, BooleanPipe]
})
export class PipeModule { }
