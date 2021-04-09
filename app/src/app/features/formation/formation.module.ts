import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationComponent } from './formation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormationRoutingModule } from './formation-routing.module';
import { FormationPathDetailComponent } from './formation-path-detail/formation-path-detail.component';
import { FormationQueryDetailComponent } from './formation-query-detail/formation-query-detail.component';
import { FormationCardComponent } from './formation-card/formation-card.component';
import { FormationSansTestComponent } from './formation-sans-test/formation-sans-test.component';

@NgModule({
  declarations: [
    FormationComponent,
    FormationPathDetailComponent,
    FormationQueryDetailComponent,
    FormationCardComponent,
    FormationSansTestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    FormationRoutingModule
  ],
  exports: [
    FormationComponent
  ],
})
export class FormationModule { }
