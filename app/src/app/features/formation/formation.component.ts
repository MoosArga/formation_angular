import { Component, OnInit } from '@angular/core';
import { FormationDaoService } from 'src/app/shared/service/formation-dao.service';
import { Observable } from 'rxjs';
import { Formation } from 'src/app/shared/model/formation';
import { User } from 'src/app/shared/model/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  titreFormation: string;
  dateDujour = new Date();
  nbFormation = 0;
  formation$: Observable<Formation[]>;

  newUser: User = new User();
  existantUser: User = new User('Sanchez', 'Jerome');

  constructor(private route: ActivatedRoute,
              private formationDaoService: FormationDaoService) { }

  ngOnInit() {
    this.formation$ = this.formationDaoService.getFormations();
    this.route.data.subscribe(data => {
      this.titreFormation = data.titre;
    })
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

}
