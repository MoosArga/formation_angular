import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovidDailyRoutingModule } from './covid-daily-routing.module';
import { CovidDailyComponent } from './covid-daily.component';


@NgModule({
  declarations: [CovidDailyComponent],
  imports: [
    CommonModule,
    CovidDailyRoutingModule
  ]
})
export class CovidDailyModule { }
