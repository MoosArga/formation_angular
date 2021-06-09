import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, filter, map, startWith, switchMap } from 'rxjs/operators';
import { Formation } from 'src/app/shared/model/formation';
import { FormationDaoService } from 'src/app/shared/service/formation-dao.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  titrePage$: Observable<string>;
  dateDuJour: Date = new Date();
  nbFormation: number = 0;
  formations$: Observable<Formation[]>;
  tFormation: string;

  searchFormation: FormControl = new FormControl('');

  constructor(private formationDaoService: FormationDaoService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.formations$ = this.formationDaoService.findAll();
    this.titrePage$ = this.route.data.pipe(
      map(data => data['titrePage'])
    );
    this.formations$ = this.searchFormation.valueChanges.pipe(
      startWith(''),
      debounceTime(1000),
      distinctUntilChanged(),
      filter(value => !value || value.length > 2 ),
      map(value => value.toLowerCase().trim()),
      switchMap(value => {
        return this.formationDaoService.findFormationsByNomLike(value).pipe( catchError((error, caught) => {
          return of([]);
        }));
      })
    );
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
