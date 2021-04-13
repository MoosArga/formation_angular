import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { CovidDailyPage } from "src/app/shared/model/covid-daily-page";
import { CovidService } from "src/app/shared/service/covid.service";
import { map, switchMap } from "rxjs/operators";

@Component({
  selector: "app-covid-daily",
  templateUrl: "./covid-daily.component.html",
})
export class CovidDailyComponent implements OnInit {
  readonly MAX_ITEMS_PER_PAGE = 10;
  readonly PAGES_DEVIATION = 3;

  covids$: Observable<CovidDailyPage>;
  pager$: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  constructor(private covidService: CovidService) {}

  ngOnInit(): void {
    this.initCovidPagination();
  }

  private initCovidPagination() {
    this.covids$ = this.pager$.asObservable().pipe(
      switchMap((page) => {
        const start = (page - 1) * this.MAX_ITEMS_PER_PAGE
        return this.covidService.findCovidDaily(start, start + this.MAX_ITEMS_PER_PAGE).pipe(
          map((response) => {
            const result: CovidDailyPage = new CovidDailyPage();
            const totalCount: number = parseInt(response.headers.get("X-Total-Count"));
            result.covids = response.body;
            result.currentPage = page;
            result.totalPage = Math.ceil(totalCount / this.MAX_ITEMS_PER_PAGE);
            result.currentPages = Array(result.totalPage).fill(0).map((m, i) => i + 1)
              .filter(p => Math.abs(result.currentPage - p) < this.PAGES_DEVIATION);
            return result;
          })
        );
      })
    );
  }

  selectPage(page: number): void {
    this.pager$.next(page);
  }
}
