import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Offre } from '../model/offre';

@Injectable({
  providedIn: 'root'
})
export class AdminOffreStore {

  private offre$: BehaviorSubject<Offre> = new BehaviorSubject<Offre>(null);

  constructor() { }

  getOffre$(): Observable<Offre> {
    return this.offre$.asObservable();
  }

  setOffre(offre: Offre): void {
    this.offre$.next(offre);
  }

  reset(): void {
    this.offre$.next(null);
  }

}
