import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notation'
})
export class NotationPipe implements PipeTransform {

  transform(value: number): string {
    // return `${value}/10`;
    return value.toString() + '/10';
  }

}
