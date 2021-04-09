import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from 'src/app/layout/error/error.component';
import { UserGuard } from 'src/app/shared/guard/User/user.guard';
import { FormationPathDetailComponent } from './formation-path-detail/formation-path-detail.component';
import { FormationQueryDetailComponent } from './formation-query-detail/formation-query-detail.component';
import { FormationComponent } from './formation.component';

const routes: Routes = [
  {
    path: '', component: FormationComponent,
    data: { titreMaPage: 'Mes formations' }
  },
  {
    //QueryParam
    //url/formation-detail?nomFormation=...
    path: 'formation-detail', component: FormationQueryDetailComponent
  },
  {
    //Param
    //url/...
    path: ':nomFormation', component: FormationPathDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationRoutingModule { }
