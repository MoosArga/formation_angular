import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotationPipe } from './filtre/notation.pipe';
import { ProgressBarComponent } from './widget/progress-bar/progress-bar.component';
import { EditUserComponent } from './widget/edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NotationPipe, ProgressBarComponent, EditUserComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [NotationPipe, ProgressBarComponent, EditUserComponent]
})
export class SharedModule { }
