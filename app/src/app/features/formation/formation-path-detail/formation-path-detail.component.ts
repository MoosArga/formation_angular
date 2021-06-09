import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Formation } from 'src/app/shared/model/formation';
import { FormationDaoService } from 'src/app/shared/service/formation-dao.service';

@Component({
  selector: 'app-formation-path-detail',
  templateUrl: './formation-path-detail.component.html',
  styleUrls: ['./formation-path-detail.component.scss']
})
export class FormationPathDetailComponent implements OnInit {

  formation$: Observable<Formation>;

  constructor(private route: ActivatedRoute,
              private formationDaoService: FormationDaoService) { }

  ngOnInit(): void {
    this.formation$ = this.route.params.pipe(
      switchMap(params => this.formationDaoService.findByName(params['nomFormation']))
    );
  }

}
