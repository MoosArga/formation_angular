import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Unit } from 'src/app/shared/model/unit';
import { UnitService } from 'src/app/shared/service/unit.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit-detail.component.html',
  styles: [
  ]
})
export class UnitDetailComponent implements OnInit {

  unit$: Observable<Unit>;

  constructor(private unitService: UnitService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.unit$ = this.route.params.pipe(
      switchMap(pathParams => this.unitService.getUnitByIdOrName(pathParams.id))
    )
  }

}
