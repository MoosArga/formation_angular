import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationComponent } from './formation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormationRoutingModule } from './formation-routing.module';
import { FormationDetailComponent } from './formation-detail/formation-detail.component';
import { FormationFormValidationComponent } from './formation-form-validation/formation-form-validation.component';
import { FormationDetailWithApiComponent } from './formation-detail-with-api/formation-detail-with-api.component';
import { FormationSansCssComponent } from './formation-sans-css/formation-sans-css.component';

@NgModule({
  declarations: [FormationComponent, FormationDetailComponent, FormationFormValidationComponent, FormationDetailWithApiComponent, FormationSansCssComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FormationRoutingModule
  ],
  exports: [FormationComponent]
})
export class FormationModule { }
