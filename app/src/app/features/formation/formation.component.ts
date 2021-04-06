import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit, OnDestroy {

  title: string = 'Mes Formations';
  titleHelper: string = 'Le Titre de la page';
  dateDuJour: Date = new Date();
  nbFormation: number  = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }

  addFormation(): void {
    this.nbFormation = parseInt(this.nbFormation.toString(), 10) + 1;
  }

  removeFormation(): void {
    this.nbFormation = parseInt(this.nbFormation.toString(), 10) - 1;
  }

}
