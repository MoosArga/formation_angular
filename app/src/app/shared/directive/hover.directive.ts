import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @Input() appHover: string;

  @HostListener('mouseover')
  onMouseOver(): void {
    console.log(this.appHover);
  }

  constructor() { }

}
