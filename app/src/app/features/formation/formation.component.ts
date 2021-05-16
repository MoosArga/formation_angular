import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from 'src/app/shared/model/formation';
import { FormationDaoService } from 'src/app/shared/service/formation-dao.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  titrePage: string = 'Mes Formations';
  dateDuJour: Date = new Date();
  nbFormation: number = 0;
  formations$: Observable<Formation[]>;

  constructor(private formationDaoService: FormationDaoService) { }

  ngOnInit(): void {
    this.formations$ = this.formationDaoService.findAll();
  }

  ajouterFormation(): void {
    this.nbFormation = +this.nbFormation + 1;
  }

  retirerFormation(): void {
    this.nbFormation = +this.nbFormation - 1;
  }

}
