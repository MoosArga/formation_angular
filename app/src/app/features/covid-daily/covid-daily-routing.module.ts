import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidDailyComponent } from './covid-daily.component';

const routes: Routes = [
  { path: '', component: CovidDailyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovidDailyRoutingModule { }
