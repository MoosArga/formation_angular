import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Formation } from '../../model/formation';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() progression: number;
  @Output() survolProgressBar: EventEmitter<number> = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

  survol(): void {
    this.survolProgressBar.emit(this.progression);
  }


}
