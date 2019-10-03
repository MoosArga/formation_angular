import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormationDaoService } from 'src/app/shared/service/formation-dao.service';
import { Observable } from 'rxjs';
import { Formation } from 'src/app/shared/model/formation';
import { combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-formation-detail-with-api',
  templateUrl: './formation-detail-with-api.component.html',
  styleUrls: ['./formation-detail-with-api.component.scss']
})
export class FormationDetailWithApiComponent implements OnInit {

  formation$: Observable<Formation>;

  constructor(private route: ActivatedRoute, private formationDaoService: FormationDaoService) { }

  ngOnInit() {
    this.formation$ = combineLatest(this.route.params, this.route.queryParams).pipe(
      map(([params, queryParams]) => {
        let nomFormation;
        if (params && params.nomFormation) {
          nomFormation = params.nomFormation;
        } else if (queryParams && queryParams.nom) {
          nomFormation = queryParams.nom;
        }
        return nomFormation;
      }),
      switchMap(nom => this.formationDaoService.getFormationByName(nom)),
      map((formations: Formation[]) => formations[0])
    );
  }

}
