import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }

  getUserById(idUser :number): Observable<User> {
    return this.httpClient.get<User>(`/api/user/${idUser}`);
  }
}
