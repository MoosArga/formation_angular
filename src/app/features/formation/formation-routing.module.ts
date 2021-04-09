import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FormationPathDetailComponent } from './formation-path-detail/formation-path-detail.component';
import { FormationQueryDetailComponent } from './formation-query-detail/formation-query-detail.component';
import { FormationComponent } from './formation.component';

const routes: Routes = [
  { path: '', component: FormationComponent, data: {title: "Mes Formations data"}},
  { path: 'formation-detail', component: FormationQueryDetailComponent},
  { path: ':nomFormation', component: FormationPathDetailComponent}
  //{ path: 'formation-detail', component: FormationQueryDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationRoutingModule { }
