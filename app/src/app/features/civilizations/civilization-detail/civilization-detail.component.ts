import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Civilization } from 'src/app/shared/model/civilization';
import { CivilizationService } from 'src/app/shared/service/civilization.service';

@Component({
  selector: 'app-civilization',
  templateUrl: './civilization-detail.component.html',
  styles: [
  ]
})
export class CivilizationDetailComponent implements OnInit {

  civilization$: Observable<Civilization>;

  constructor(private civilizationService: CivilizationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.civilization$ = this.route.params.pipe(
      switchMap(pathParams => this.civilizationService.getCivilizationById(parseInt(pathParams.id)))
    )
  }

}
