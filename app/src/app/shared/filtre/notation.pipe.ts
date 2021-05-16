import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notation'
})
export class NotationPipe implements PipeTransform {

  transform(value: string): string {
    // return `${value}/10`;
    return value + '/10';
  }

}
