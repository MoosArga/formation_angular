import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CovidDailyPage } from 'src/app/shared/model/covid-daily-page';
import { CovidService } from 'src/app/shared/service/covid.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-covid-daily',
  templateUrl: './covid-daily.component.html'
})
export class CovidDailyComponent implements OnInit {

  covids$: Observable<CovidDailyPage>;
  pager: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.covids$ = this.covidService.findCovidDaily(0, 10).pipe(
      map(response => {
        const result: CovidDailyPage = new CovidDailyPage();
        result.covids = response.body;
        result.totalCount = parseInt(response.headers.get('X-Total-Count'), 10);
        return result;
      })
    );
  }

}
