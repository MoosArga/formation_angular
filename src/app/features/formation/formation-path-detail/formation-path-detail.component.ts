import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Formation } from 'src/app/shared/model/formation';
import { FormationsDaoService } from 'src/app/shared/service/formations-dao.service';


@Component({
  selector: 'app-formation-path-detail',
  templateUrl: './formation-path-detail.component.html',
  styleUrls: ['./formation-path-detail.component.scss']
})
export class FormationPathDetailComponent implements OnInit {


  formationCourante$: Observable<Formation>;

  constructor(private formationsDaoService :FormationsDaoService,
    private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.formationCourante$ = this.route.params.pipe(switchMap(params => {
      return this.formationsDaoService.getFormationsByName(params['nomFormation'])
    }))
  }

}
