import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CivilizationsRoutingModule } from './civilizations-routing.module';
import { CivilizationsComponent } from '../civilizations/civilizations.component';
import { CivilizationDetailComponent } from './civilization-detail/civilization-detail.component';


@NgModule({
  declarations: [
    CivilizationsComponent,
    CivilizationDetailComponent
  ],
  imports: [
    CommonModule,
    CivilizationsRoutingModule
  ]
})
export class CivilizationsModule { }
