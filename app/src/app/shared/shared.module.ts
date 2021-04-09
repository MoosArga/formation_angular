import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotationPipe } from './filtre/notation.pipe';
import { ProgressBarComponent } from './widget/progress-bar/progress-bar.component';
import { SuiviUserDirective } from './directive/suivi-user.directive';
import { ModalComponent } from './widget/modal/modal.component';



@NgModule({
  declarations: [
    NotationPipe,
    ProgressBarComponent,
    ModalComponent,
    SuiviUserDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotationPipe,
    ProgressBarComponent,
    ModalComponent,
    SuiviUserDirective
  ]
})
export class SharedModule { }
