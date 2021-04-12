import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SimpleCivilization } from 'src/app/shared/model/simple-civilization';
import { CivilizationService } from 'src/app/shared/service/civilization.service';

@Component({
  selector: 'app-civilizations',
  templateUrl: './civilizations.component.html',
  styles: [
  ]
})
export class CivilizationsComponent implements OnInit {

  civilizations$: Observable<SimpleCivilization[]>;

  constructor(private civilizationService: CivilizationService) { }

  ngOnInit(): void {
    this.civilizations$ = this.civilizationService.getAllCivilizations();
  }

}
