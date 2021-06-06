import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from 'src/app/shared/model/formation';
import { FormationDaoService } from 'src/app/shared/service/formation-dao.service';

@Component({
  selector: 'app-formation-path-detail',
  templateUrl: './formation-path-detail.component.html',
  styleUrls: ['./formation-path-detail.component.scss']
})
export class FormationPathDetailComponent implements OnInit {

  formation: Formation;

  constructor(private route: ActivatedRoute,
              private formationDaoService: FormationDaoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const nomFormation = params['nomFormation'];
      this.formationDaoService.findByName(nomFormation).subscribe(formation => {
        this.formation = formation;
      });
    });
  }

}
