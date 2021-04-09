import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormationRoutingModule } from './formation-routing.module';
import { FormationComponent } from './formation.component';
import { FormationPathDetailComponent } from './formation-path-detail/formation-path-detail.component';
import { FormationQueryDetailComponent } from './formation-query-detail/formation-query-detail.component';
import { FormationCardComponent } from './formation-card/formation-card.component';



@NgModule({
  declarations: [
    FormationComponent,
    FormationPathDetailComponent,
    FormationQueryDetailComponent,
    FormationCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    FormationRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    FormationComponent
  ]
})
export class FormationModule { }
