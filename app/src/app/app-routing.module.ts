import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './layout/error/error.component';
import { UserGuard } from './shared/guard/user.guard';

const routes: Routes = [
  {
    path: 'formation',
    loadChildren: () => import('./features/formation/formation.module').then(m => m.FormationModule),
    canActivate: [UserGuard]
  },
  { path: 'error', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
