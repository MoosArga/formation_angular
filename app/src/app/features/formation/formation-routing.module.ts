import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormationComponent } from './formation.component';
import { FormationDetailComponent } from './formation-detail/formation-detail.component';
import { FormationFormValidationComponent } from './formation-form-validation/formation-form-validation.component';
import { FormationDetailWithApiComponent } from './formation-detail-with-api/formation-detail-with-api.component';

const routes: Routes = [
  { path: '', component: FormationComponent, data: {titre: 'Mes formations en data statique'} },
  { path: 'form', component: FormationFormValidationComponent },
  { path: 'formation-detail', component: FormationDetailComponent },
  { path: 'details', component: FormationDetailWithApiComponent },
  { path: ':nomFormation', component: FormationDetailWithApiComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationRoutingModule { }
