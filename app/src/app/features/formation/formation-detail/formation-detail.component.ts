import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormationDaoService } from 'src/app/shared/service/formation-dao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { Formation } from 'src/app/shared/model/formation';
import { switchMap, tap } from 'rxjs/operators';
import { FormationStore } from 'src/app/shared/store/formation.store';

@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.scss']
})
export class FormationDetailComponent implements OnInit, OnDestroy {

  nomFormation: string;
  formations$: Observable<Formation>;

  constructor(private formationDaoService: FormationDaoService,
              private formationStore: FormationStore,
              private router: Router) { }

  ngOnInit() {
    this.formations$ = this.formationStore.getCurrentFormation().pipe(
      tap(formation => {
        if (!formation) {
          this.router.navigateByUrl('/formation');
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.formationStore.resetCurrentFormation();
  }

}
