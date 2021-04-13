import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryManagerRoutingModule } from './delivery-manager-routing.module';
import { DeliveryManagerComponent } from './delivery-manager.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DeliveryManagerComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DeliveryManagerRoutingModule
  ]
})
export class DeliveryManagerModule { }
