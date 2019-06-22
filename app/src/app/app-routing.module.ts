import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      {
        path: 'indicators',
        loadChildren: () => import('./features/indicators/indicators.module').then(m => m.IndicatorsModule)
      }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'app/indicators' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
