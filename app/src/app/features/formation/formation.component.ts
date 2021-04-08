import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, of, Subscription } from 'rxjs';
import { Formation } from 'src/app/shared/model/formation';
import { FormationIhmModel } from 'src/app/shared/model/formation-ihm-model';
import { FormationDaoService } from 'src/app/shared/service/formation-dao.service';
import { catchError, debounceTime, distinctUntilChanged, filter, map, mergeMap, startWith, switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Dumb } from 'src/app/shared/model/dumb';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit, OnDestroy {

  dumb$: Observable<Dumb>;

  nomFormation: FormControl = new FormControl();
  toto$: Observable<string>;

  title: string = 'Mes Formations';
  titleHelper: string = 'Le Titre de la page';
  dateDuJour: Date = new Date();
  nbFormation: number  = 0;

  formation$: Observable<FormationIhmModel>;
  isOpen: boolean = false;

  titrePage$: Observable<string>;

  tFormation: string;

  constructor(private formationDaoService: FormationDaoService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.formation$ = this.formationDaoService.searchFormations().pipe(
    //   map(formations => {
    //     const result: FormationIhmModel = new FormationIhmModel();
    //     result.formations = formations;
    //     result.moyenne = this.calculateAverage(formations);
    //     return result;
    //   })
    // );
    this.titrePage$ = this.route.data.pipe(
      map(data => data.titrePage)
    );

    this.formation$ = this.nomFormation.valueChanges.pipe(
      startWith(''),
      debounceTime(1000),
      distinctUntilChanged(),
      filter((valeurDeMonInput: string) => valeurDeMonInput === '' || valeurDeMonInput.length > 2),
      map((valeurDeMonInput: string) => valeurDeMonInput.toLowerCase().trim()),
      switchMap((valeurDeMonInputTransformee: string) => this.appelerApiFormations(valeurDeMonInputTransformee)),
      map((formations: Formation[]) => {
        const result: FormationIhmModel = new FormationIhmModel();
        result.formations = formations;
        result.moyenne = this.calculateAverage(formations);
        return result;
      })
    );
  }


  appelerApiFormations(nom: string): Observable<Formation[]> {
    return this.formationDaoService.searchFormationNomLike(nom).pipe(
      catchError(error => {
        // //
        return of([]);
      })
    )
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
