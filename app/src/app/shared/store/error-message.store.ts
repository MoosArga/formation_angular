import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageStore {

  private error$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor() { }

  getError$(): Observable<string> {
    return this.error$.asObservable();
  }

  pushError(error: string): void {
    this.error$.next(error);
  }

  reset(): void {
    this.error$.next(null);
  }

}
