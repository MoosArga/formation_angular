import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formation } from 'src/app/shared/model/formation';
import { FormationDaoService } from 'src/app/shared/service/formation-dao.service';

@Component({
  selector: 'app-formation-card',
  templateUrl: './formation-card.component.html',
  styleUrls: ['./formation-card.component.scss']
})
export class FormationCardComponent implements OnInit {

  formation: Formation;

  constructor(private formationDaoService: FormationDaoService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
