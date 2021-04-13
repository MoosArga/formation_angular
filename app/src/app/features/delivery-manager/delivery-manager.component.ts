import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Command } from 'src/app/shared/model/command';
import { CommandService } from 'src/app/shared/service/command.service';
import { switchMap, tap } from 'rxjs/operators';
import *  as moment from 'moment';

@Component({
  selector: 'app-delivery-manager',
  templateUrl: './delivery-manager.component.html'
})
export class DeliveryManagerComponent implements OnInit, OnDestroy {

  cmd: Command = new Command();

  commands$: Observable<Command[]>;

  cmdUpdater$: BehaviorSubject<string> = new BehaviorSubject<string>('init');

  cmdCreationSub: Subscription;

  minDate: Date = new Date();
  isDateBeforeNow: boolean = false;
  isDateValid: boolean = true;

  constructor(private commandService: CommandService) { }

  ngOnInit(): void {
    this.commands$ = this.cmdUpdater$.asObservable().pipe(
      switchMap(() => this.commandService.getCommands()),
      tap(commandes => {
        this.cmd.nb = Math.floor(commandes.reduce((a, b) => a + b.nb, 0) / commandes.length);
        const now = moment();
        this.cmd.dateResa = moment().add(1, 'week').startOf('week')
          .hour(now.hour()).minute(now.minute())
          .add(90, 'minute').toDate();
      })
    )
  }

  ngOnDestroy(): void {
    this.unsubscribe(this.cmdCreationSub);
  }

  createCommand(): void {
    this.unsubscribe(this.cmdCreationSub);
    this.cmdCreationSub = this.commandService.createCommand(this.cmd).subscribe(
      () => {
        this.cmd.name = '';
        this.cmd.dateResa = new Date();
        this.cmdUpdater$.next('update');
      }
    )
  }

  setDateResa(dateInput: string): void {
    const momentDate: moment.Moment = moment(dateInput);
    if (momentDate.isValid()) {
      this.isDateValid = true;
      this.cmd.dateResa = momentDate.toDate();
      this.isDateBeforeNow = momentDate.isBefore(moment());
    } else {
      this.isDateValid = false;
      this.isDateBeforeNow = false;
    }
  }

  // Je factorise ce code, généralement il est factorisé dans un utilitaire sur l'ensemble de mon appli
  private unsubscribe(sub: Subscription): void {
    if (sub) {
      sub.unsubscribe();
    }
  }

}
