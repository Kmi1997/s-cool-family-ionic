import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'booleanPipe'
})
export class BooleanPipe implements PipeTransform {

  transform(value : boolean): string {
    if(value) return 'Oui'
    return 'Non'

  }

}
