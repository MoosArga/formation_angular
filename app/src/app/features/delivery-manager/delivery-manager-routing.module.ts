import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryManagerComponent } from './delivery-manager.component';

const routes: Routes = [
  { path: '', component: DeliveryManagerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryManagerRoutingModule { }
