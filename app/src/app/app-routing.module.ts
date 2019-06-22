import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      {
        path: 'delivery',
        loadChildren: () => import('./features/delivery-manager/delivery-manager.module').then(m => m.DeliveryManagerModule)
      }
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: 'app/delivery' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
