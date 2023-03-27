import { Pipe, PipeTransform } from '@angular/core';
import { workerData } from 'worker_threads';

@Pipe({
  name: 'singleOrPlural'
})
export class SingleOrPluralPipe implements PipeTransform {

  transform(value: number, word: string): string {
    if (value > 1) return value + " " + word + "s";
    return value + " " + word;

  }

}
