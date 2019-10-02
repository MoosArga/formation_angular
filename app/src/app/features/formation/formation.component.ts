import { Component, OnInit } from '@angular/core';
import { FormationDaoService } from 'src/app/shared/service/formation-dao.service';
import { Pair } from 'src/app/shared/model/pair';
import { Observable } from 'rxjs';
import { Formation } from 'src/app/shared/model/formation';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  titreFormation = 'Mes formations';
  dateDujour = new Date();
  nbFormation = 0;
  formation$: Observable<Formation[]>;

  constructor(private formationDaoService: FormationDaoService) { }

  ngOnInit() {
    this.formation$ = this.formationDaoService.getFormations();
  }


  ajouterFormation(): void {
    this.nbFormation = +this.nbFormation + 1;
  }

  retirerFormation(): void {
    this.nbFormation = +this.nbFormation - 1;
  }

}
