import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from 'src/app/shared/model/formation';
import { FormationDaoService } from 'src/app/shared/service/formation-dao.service';

@Component({
  selector: 'app-formation-query-detail',
  templateUrl: './formation-query-detail.component.html',
  styleUrls: ['./formation-query-detail.component.scss']
})
export class FormationQueryDetailComponent implements OnInit {

  formation: Formation;

  constructor(private route: ActivatedRoute,
              private formationDaoService: FormationDaoService) { }

  ngOnInit(): void {
  }

}
