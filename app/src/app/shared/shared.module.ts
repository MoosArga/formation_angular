import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotationPipe } from './filtre/notation.pipe';
import { ProgressionBarComponent } from './widget/progression-bar/progression-bar.component';
import { HoverDirective } from './directive/hover.directive';



@NgModule({
  declarations: [
    NotationPipe,
    ProgressionBarComponent,
    HoverDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NotationPipe,
    ProgressionBarComponent,
    HoverDirective
  ]
})
export class SharedModule { }
