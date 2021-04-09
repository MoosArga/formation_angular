import { Component, Input, OnInit } from '@angular/core';
import { Formation } from 'src/app/shared/model/formation';

@Component({
  selector: 'app-formation-card',
  templateUrl: './formation-card.component.html',
  styleUrls: ['./formation-card.component.scss']
})
export class FormationCardComponent implements OnInit {

  constructor() { }

  @Input() formation: Formation;

  ngOnInit(): void {
  }

}
