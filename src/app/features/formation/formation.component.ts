import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, startWith, switchMap } from 'rxjs/operators';
import { FormationsDaoService } from 'src/app/shared/service/formations-dao.service';
import { Formation } from '../../shared/model/formation'

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {


  public date = new Date();
  public title: string = "Mes Formations";
  public nombreFormation: number = 0;
  public formations$: Observable<Formation[]>;
  public survoled: string;
  public moyenneFormation: number;
  public $titre: Observable<string>;

  public nomFormationForm: string;

  public nomFormation: FormControl = new FormControl();

  constructor(private formationsDaoService :FormationsDaoService,
              private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.$titre = this.route.data.pipe(map(data => {return data.titre}));

    this.formations$ = this.nomFormation.valueChanges.pipe(
      startWith((data: string) => data =''),
      debounceTime(1000),
      distinctUntilChanged(),
      filter((data: string) => !data || data.length > 2),
      map((data: string) => {
        data.toLocaleLowerCase();
        data.trim();
        return data;
      }),
      switchMap((data: string) => {
        return this.formationsDaoService.scearchFormationsByName(data);
      })
    );
  }

  ajouterFormation(): void {
    this.nombreFormation++;
  }

  supprimerFormation(): void {
    this.nombreFormation--;
  }

  catchSurvol(): void {
    console.log("test")
    //console.log(moy.toString())
  }

  getUrlforQuery(name: string): string {
      return "formation-detail?nomFormation=" + name;
  }

  calculeMoyenne(formations: Formation[]): number {
    return Math.ceil(formations.reduce((a , b) => a + b.note, 0) / formations.length);
  }
}
