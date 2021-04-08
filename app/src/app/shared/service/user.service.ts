import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserById(idUser: number): Observable<User> {
    return this.http.get<User>(`/api/user/${idUser}`);
  }


}
