import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Formation } from '../../model/formation';

@Component({
  selector: 'app-progression-bar',
  templateUrl: './progression-bar.component.html',
  styleUrls: ['./progression-bar.component.scss']
})
export class ProgressionBarComponent implements OnInit {

  @Input() formation: Formation;
  @Output() survolProgressBar: EventEmitter<Formation> = new EventEmitter<Formation>();

  constructor() { }

  ngOnInit(): void {
  }

  survol(): void {
    this.survolProgressBar.emit(this.formation);
  }

}
