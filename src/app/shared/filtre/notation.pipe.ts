import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notation'
})
export class NotationPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return value + "/10";
  }

}
