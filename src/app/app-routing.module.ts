import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationComponent } from './features/formation/formation.component';
import { ErrorComponent } from './layout/error/error.component';
import { UserGuard } from './shared/guard/User/user.guard';

const routes: Routes = [
  //{ path: 'formation', component: FormationComponent },
  {
    path: 'formation',
    loadChildren: () => import('./features/formation/formation.module').then(m => m.FormationModule),
    canActivate:[UserGuard],
  },
  {
    path: 'error', component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
