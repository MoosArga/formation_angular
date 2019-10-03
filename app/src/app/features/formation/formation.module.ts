import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationComponent } from './formation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FormationRoutingModule } from './formation-routing.module';

@NgModule({
  declarations: [FormationComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    FormationRoutingModule
  ],
  exports: [FormationComponent]
})
export class FormationModule { }
