import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotationPipe } from './filtre/notation.pipe';



@NgModule({
  declarations: [
    NotationPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotationPipe
  ]
})
export class SharedModule { }
