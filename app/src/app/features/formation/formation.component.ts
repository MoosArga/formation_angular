import { Component, OnInit } from '@angular/core';
import { FormationDaoService } from 'src/app/shared/service/formation-dao.service';
import { Observable } from 'rxjs';
import { Formation } from 'src/app/shared/model/formation';
import { User } from 'src/app/shared/model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { tap, map, startWith, debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { FormationStore } from 'src/app/shared/store/formation.store';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  titreFormation$: Observable<string>;
  dateDujour = new Date();
  nbFormation = 0;
  formation$: Observable<Formation[]>;

  searchFormation: FormControl = new FormControl('');

  newUser: User = new User();
  existantUser: User = new User('Sanchez', 'Jerome');

  constructor(private route: ActivatedRoute,
              private formationDaoService: FormationDaoService,
              private formationStore: FormationStore,
              private router: Router) { }

  ngOnInit() {
    this.formation$ = this.formationDaoService.getFormations();
    this.titreFormation$ = this.route.data.pipe(
      map(data => data.titre)
    );
    this.formation$ = this.searchFormation.valueChanges.pipe(
      startWith(''),
      debounceTime(1000),
      map(x => x || ''),
      distinctUntilChanged(),
      filter(x => !x || x.length > 2),
      map(x => x.trim().toLowerCase()),
      switchMap(x => {
        return this.formationDaoService.getFormationLikeName(x);
      })
    );
  }


  ajouterFormation(): void {
    this.nbFormation = +this.nbFormation + 1;
  }

  retirerFormation(): void {
    this.nbFormation = +this.nbFormation - 1;
  }

  userOverProgressBar(p: number): void {
    console.log("L'utilisateur chercher qq chose sur la formation dont l'avantcement est de " + p);
  }

  createUser(user: User): void {
    console.log('On va créer ' + user.nom + ' ' + user.prenom);
  }

  modifyUser(user: User): void {
    console.log('On va modifier ' + user.nom + ' ' + user.prenom);
  }

  goToFormation(f: Formation): void {
    this.formationStore.setCurrentFormation(f);
    this.router.navigate(['./formation-detail'], { relativeTo: this.route});
  }

}
