import { Component, OnInit } from '@angular/core';
import { FormationDaoService } from 'src/app/shared/service/formation-dao.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  titreFormation = 'Mes formations';
  dateDujour = new Date();
  nbFormation = 0;

  constructor(private formationDaoService: FormationDaoService) { }

  ngOnInit() {
  }


  ajouterFormation(): void {
    this.nbFormation = +this.nbFormation + 1;
  }

  retirerFormation(): void {
    this.nbFormation = +this.nbFormation - 1;
  }

}
