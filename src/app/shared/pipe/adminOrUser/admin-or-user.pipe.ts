import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminOrUser'
})
export class AdminOrUserPipe implements PipeTransform {

  transform(value : boolean): string{
    if(value){
    return 'administrateur';
    }
    return 'utilisateur'
  }

}
