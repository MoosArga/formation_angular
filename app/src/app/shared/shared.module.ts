import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorHelperComponent } from './widget/form-error-helper/form-error-helper.component';



@NgModule({
  declarations: [ 
    FormErrorHelperComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ 
    FormErrorHelperComponent
  ]
})
export class SharedModule { }
