import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Formation } from 'src/app/shared/model/formation';
import { FormationIhmModel } from 'src/app/shared/model/formation-ihm-model';
import { FormationDaoService } from 'src/app/shared/service/formation-dao.service';
import { map } from 'rxjs/operators';

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

  formation$: Observable<FormationIhmModel>;
  isOpen: boolean = false;

  constructor(private formationDaoService: FormationDaoService) { }

  ngOnInit(): void {
    this.formation$ = this.formationDaoService.searchFormations().pipe(
      map(formations => {
        const result: FormationIhmModel = new FormationIhmModel();
        result.formations = formations;
        result.moyenne = this.calculateAverage(formations);
        return result;
      })
    );
  }

  ngOnDestroy(): void {
  }

  addFormation(): void {
    this.nbFormation = parseInt(this.nbFormation.toString(), 10) + 1;
  }

  removeFormation(): void {
    this.nbFormation = parseInt(this.nbFormation.toString(), 10) - 1;
  }

  userWantsDetails(progression: number): void {
    console.log(`L'utilisateur rechercher quelque chose sur la formation ayant l'avancement ${progression * 10}%`);
  }

  constaterMoyenne(moyenne: number): void {
    console.log(`L'utilisateur constate sa moyenne ${moyenne}`);
  }

  calculateAverage(formations: Formation[]): number {
    console.log('Tiens je vérifie la METHODE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    return Math.ceil(formations.reduce((accumulator, valeurCourante) => accumulator + valeurCourante.note, 0) / formations.length);
  }

  toggleFormations(): void {
    this.isOpen = !this.isOpen;
  }

}
