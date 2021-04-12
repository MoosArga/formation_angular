import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SimpleUnit } from 'src/app/shared/model/simple-unit';
import { UnitService } from 'src/app/shared/service/unit.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styles: [
  ]
})
export class UnitsComponent implements OnInit {

  units$: Observable<SimpleUnit[]>;

  constructor(private unitService: UnitService) { }

  ngOnInit(): void {
    this.units$ = this.unitService.getAllUnits();
  }

}
