import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Form } from '@angular/forms';
import { Formation } from '../../model/formation';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  //@Input() formation: Formation;
  @Input() progression: number;
  @Output() survol: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  eventMO(): void {
    this.survol.emit(this.progression);
  }

}
