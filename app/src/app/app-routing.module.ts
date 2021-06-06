import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NotAuthorizedComponent } from './layout/not-authorized/not-authorized.component';
import { AdminGuard } from './shared/guard/admin.guard';

const routes: Routes = [
  {
    path: 'formation',
    loadChildren: () => import('./features/formation/formation.module').then(m => m.FormationModule),
    canActivate: [AdminGuard]
  },
  { path: 'not-authorized', component: NotAuthorizedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
