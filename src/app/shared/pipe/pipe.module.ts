import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleOrPluralPipe } from './single-or-plural/single-or-plural.pipe';




@NgModule({
  declarations: [SingleOrPluralPipe],
  imports: [
    CommonModule
  ],
  exports: [SingleOrPluralPipe]
})
export class PipeModule { }
