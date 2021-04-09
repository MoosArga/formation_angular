import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminFeedbackOffreStore {

  private feedbackMsg$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor() { }

  getFeedbackMsg$(): Observable<string> {
    return this.feedbackMsg$.asObservable();
  }

  setFeedbackMsg(msg: string): void {
    this.feedbackMsg$.next(msg);
  }

  reset(): void {
    this.setFeedbackMsg(null);
  }

}
