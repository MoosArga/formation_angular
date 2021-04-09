import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ConnectedUserStore {

  private currentUser$: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  private tokenJwt$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor() { }

  setUser(user: User, tokenJwt: string): void {
    this.currentUser$.next(user);
    this.tokenJwt$.next(tokenJwt);
  }

  getCurrentUser$(): Observable<User> {
    return this.currentUser$.asObservable();
  }

  getTokenJwt$(): Observable<string> {
    return this.tokenJwt$.asObservable();
  }

}
