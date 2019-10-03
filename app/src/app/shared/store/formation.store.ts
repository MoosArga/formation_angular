import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Formation } from '../model/formation';

@Injectable()
export class FormationStore {

  private currentFormation: BehaviorSubject<Formation> = new BehaviorSubject<Formation>(null);

  constructor() { }

  getCurrentFormation(): Observable<Formation> {
    return this.currentFormation.asObservable();
  }

  setCurrentFormation(f: Formation): void {
    this.currentFormation.next(f);
  }

  resetCurrentFormation(): void {
    this.currentFormation.next(null);
  }
}
