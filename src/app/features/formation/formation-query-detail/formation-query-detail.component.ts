import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Formation } from 'src/app/shared/model/formation';
import { FormationsDaoService } from 'src/app/shared/service/formations-dao.service';

@Component({
  selector: 'app-formation-query-detail',
  templateUrl: './formation-query-detail.component.html',
  styleUrls: ['./formation-query-detail.component.scss']
})
export class FormationQueryDetailComponent implements OnInit {
  formationCourante$: Observable<Formation>;

  constructor(private formationsDaoService :FormationsDaoService,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.formationCourante$ = this.route.queryParams.pipe(switchMap(queryParams => {
      return this.formationsDaoService.getFormationsByName(queryParams.nomFormation)
    }))
  }

}
