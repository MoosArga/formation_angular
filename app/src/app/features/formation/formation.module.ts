import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationComponent } from './formation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FormationRoutingModule } from './formation-routing.module';
import { FormationCardComponent } from './formation-card/formation-card.component';



@NgModule({
  declarations: [
    FormationComponent,
    FormationCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    FormationRoutingModule
  ],
  exports: []
})
export class FormationModule { }
