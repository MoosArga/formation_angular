import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerStore {

  spin$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  getSpin$(): Observable<boolean> {
    return this.spin$.asObservable();
  }

  setSpinnerTo(spin: boolean): void {
    this.spin$.next(spin);
  }

}
