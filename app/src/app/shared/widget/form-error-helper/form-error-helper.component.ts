import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-form-error-helper',
  templateUrl: './form-error-helper.component.html',
  styles: [
  ]
})
export class FormErrorHelperComponent implements OnInit {

  @Input() readonly model: NgModel;
  @Input() readonly fieldWording: string;
  @Input() readonly patternErrorMessage: string;

  constructor() { }

  ngOnInit(): void {
  }

}
