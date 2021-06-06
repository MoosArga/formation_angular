import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Formation } from 'src/app/shared/model/formation';
import { FormationDaoService } from 'src/app/shared/service/formation-dao.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  titrePage: string;
  dateDuJour: Date = new Date();
  nbFormation: number = 0;
  formations$: Observable<Formation[]>;
  tFormation: string;

  constructor(private formationDaoService: FormationDaoService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.formations$ = this.formationDaoService.findAll();
    this.route.data.subscribe(data => {
      this.titrePage = data.titrePage;
    })
  }

  ajouterFormation(): void {
    this.nbFormation = +this.nbFormation + 1;
  }

  retirerFormation(): void {
    this.nbFormation = +this.nbFormation - 1;
  }

  catchInteractionProgressBar(formation: Formation): void {
    console.log(`L'utilisateur cherche quelque chose sur la formation ${formation.nom} avec l'état d'avancement ${formation.note * 10}%`);
  }

  watchForm(form: NgForm): void {
    console.log(form);
  }

}
