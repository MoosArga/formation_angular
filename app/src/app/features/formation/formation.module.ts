import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationComponent } from './formation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    FormationComponent
  ]
})
export class FormationModule { }
