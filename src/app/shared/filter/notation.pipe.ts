import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notation'
})
export class NotationPipe implements PipeTransform {

  transform(value: number): string {
    return value.toString() + '/10'
  }

}
