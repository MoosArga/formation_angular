import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'units' },
  {
    path: 'units',
    loadChildren: () => import('./features/units/units.module').then(m => m.UnitsModule)
  },
  {
    path: 'civilizations',
    loadChildren: () => import('./features/civilizations/civilizations.module').then(m => m.CivilizationsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
