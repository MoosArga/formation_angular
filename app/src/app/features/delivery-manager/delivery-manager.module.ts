import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryManagerRoutingModule } from './delivery-manager-routing.module';
import { DeliveryManagerComponent } from './delivery-manager.component';

@NgModule({
  declarations: [DeliveryManagerComponent],
  imports: [
    CommonModule,
    DeliveryManagerRoutingModule
  ]
})
export class DeliveryManagerModule { }
