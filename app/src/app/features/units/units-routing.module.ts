import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitDetailComponent } from './unit-detail/unit-detail.component';
import { UnitsComponent } from './units.component';

const routes: Routes = [
  { path: '', component: UnitsComponent },
  { path: ':id', component: UnitDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitsRoutingModule { }
