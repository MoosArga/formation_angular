import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Formation } from 'src/app/shared/model/formation';
import { FormationDaoService } from 'src/app/shared/service/formation-dao.service';

@Component({
  selector: 'app-formation-query-detail',
  templateUrl: './formation-query-detail.component.html',
  styleUrls: ['./formation-query-detail.component.scss']
})
export class FormationQueryDetailComponent implements OnInit {

  formation$: Observable<Formation>;

  constructor(private formationDaoService: FormationDaoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.formation$ = this.route.queryParams.pipe(
      switchMap(params => this.formationDaoService.searchByNom(params.nomFormation))
    );
  }

}
