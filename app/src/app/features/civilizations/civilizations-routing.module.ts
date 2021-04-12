import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CivilizationDetailComponent } from './civilization-detail/civilization-detail.component';
import { CivilizationsComponent } from './civilizations.component';

const routes: Routes = [
  { path: '', component: CivilizationsComponent },
  { path: ':id', component: CivilizationDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CivilizationsRoutingModule { }
