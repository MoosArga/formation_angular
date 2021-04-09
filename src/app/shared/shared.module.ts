import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotationPipe } from './filter/notation.pipe';
import { ProgressionBarComponent } from './widget/progression-bar/progression-bar.component';

@NgModule({
  declarations: [
    NotationPipe,
    ProgressionBarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotationPipe,
    ProgressionBarComponent
  ]
})
export class SharedModule { }
