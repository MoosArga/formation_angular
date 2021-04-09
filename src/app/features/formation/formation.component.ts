import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from 'src/app/shared/model/formation';
import { FormationDaoService } from 'src/app/shared/service/formation-dao.service';
import { ActivatedRoute } from '@angular/router'
import { debounceTime, distinctUntilChanged, filter, map, startWith, switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  title: string = 'Mes Formations';
  today: Date = new Date();
  nbFormation: number = 0;

  tFormation: string;

  formation$: Observable<Formation[]>;

  data$: Observable<string>;

  nomFormation: FormControl=new FormControl();

  constructor(private formationDaoService: FormationDaoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.data$ = this.route.data.pipe(
      map( data => data.title)
    );
    //this.formation$ = this.formationDaoService.search();
    this.formation$ = this.nomFormation.valueChanges.pipe(
      startWith(''),
      debounceTime(1000),
      distinctUntilChanged(),
      filter((param: string) => param ==='' || param.length >= 2),
      map((param: string) => param.toLocaleLowerCase().trim()),
      switchMap((param: string) => this.formationDaoService.searchByText(param))
    );
  }

  addFormation(): void {
    +this.nbFormation++;
  }

  delFormation(): void {
    +this.nbFormation--;
  }

  action(avancement: number): void{
    console.log(`L'utilisateur cherche quelque chose sur la formation avec taux ${avancement}%`);
  }

  calcul(formations: Formation[]): number{
    return Math.ceil(formations.reduce((a,b) => a + b.note, 0) / formations.length);
  }

  action1(moyenne: number): void{
    console.log(`L'utilisateur constate sa moyenne ${moyenne}`);
  }


}
