import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Formation } from '../../model/formation';


@Component({
  selector: 'app-progression-bar',
  templateUrl: './progression-bar.component.html',
  styleUrls: ['./progression-bar.component.scss']
})
export class ProgressionBarComponent implements OnInit {

  @Input() avancement: number;
  @Output() catchInteraction: EventEmitter<any> =new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  action(): void{
    this.catchInteraction.emit(this.avancement);
  }

}
