import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Formation } from '../../model/formation';

@Component({
  selector: 'app-progression-bar',
  templateUrl: './progression-bar.component.html',
  styleUrls: ['./progression-bar.component.scss']
})
export class ProgressionBarComponent implements OnInit {


  @Input() note: number;
  @Output() catchSurvol : EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  survol(): void {
    this.catchSurvol.emit(this.note);
  }
}
