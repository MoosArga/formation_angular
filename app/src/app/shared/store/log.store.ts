import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogStore {

  private log$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor() { }

  getLog$(): Observable<string> {
    return this.log$.asObservable();
  }

  pushLog(msg: string): void {
    this.log$.next(msg);
  }
}
