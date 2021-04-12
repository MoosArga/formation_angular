import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitsRoutingModule } from './units-routing.module';
import { UnitsComponent } from '../units/units.component';
import { UnitDetailComponent } from './unit-detail/unit-detail.component';


@NgModule({
  declarations: [
    UnitsComponent,
    UnitDetailComponent
  ],
  imports: [
    CommonModule,
    UnitsRoutingModule
  ]
})
export class UnitsModule { }
