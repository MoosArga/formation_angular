import { Component, OnInit } from '@angular/core';
import { Form, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, startWith, switchMap } from 'rxjs/operators';
import { Formation } from 'src/app/shared/model/formation';
import { FormationDaoService } from 'src/app/shared/service/formation-dao.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss'],
})
export class FormationComponent implements OnInit {

  nomFormation: FormControl = new FormControl();

  titre: string = "Mes formations";
  titreCom: string = "Commentaire Mes formations";
  date: Date = new Date();
  btnAdd: string = "Ajouter";
  btnRem: string = "Enlever";
  nbr: number = 0;

  formations$: Observable<Formation[]>;
  moyenne:number = 0;

  title: string;

  tFormation: string;

  constructor(private formationDaoService:FormationDaoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.formations$=this.formationDaoService.searchFormations();
    this.route.data.subscribe(data =>
      this.title = data.titreMaPage
      );

      this.formations$ = this.nomFormation.valueChanges.pipe(
        startWith(''),
        debounceTime(500),
        distinctUntilChanged(),
        filter(f => f === '' || f.length > 2),
        map((f: string) => f.toLowerCase().trim()),
        switchMap(toto => this.formationDaoService.searchFormationsByFilter(toto)),
      )
  }

  add() : void{
    +this.nbr++;
  }

  remove() : void{
    this.nbr = this.nbr -1;
  }

  log(progression: number): void{
    console.log(`formation : ` + progression*10 + "%");
  }

  calculMoyenne(formations: Formation[]): number{
    return formations.reduce((a,b) => a + b.note, 0) / formations.length;
  }

  logMoyenne(moyenne: number): void{
    console.log(`moyenne : ` + Math.ceil(moyenne));
  }

}
