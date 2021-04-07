import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotationPipe } from './filtre/notation.pipe';
import { ProgressBarComponent } from './widget/progress-bar/progress-bar.component';



@NgModule({
  declarations: [
    NotationPipe,
    ProgressBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotationPipe,
    ProgressBarComponent
  ]
})
export class SharedModule { }
