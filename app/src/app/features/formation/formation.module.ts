import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationComponent } from './formation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FormationRoutingModule } from './formation-routing.module';
import { FormationCardComponent } from './formation-card/formation-card.component';
import { FormationPathDetailComponent } from './formation-path-detail/formation-path-detail.component';
import { FormationQueryDetailComponent } from './formation-query-detail/formation-query-detail.component';



@NgModule({
  declarations: [
    FormationComponent,
    FormationCardComponent,
    FormationPathDetailComponent,
    FormationQueryDetailComponent
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
