import { Directive, HostListener, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Directive({
  selector: '[appSuiviUser]'
})
export class SuiviUserDirective {

  @Input() appSuiviUser: string;

  constructor() { }

  @HostListener('click') onClick() {
    console.log(this.appSuiviUser);
  }

}
