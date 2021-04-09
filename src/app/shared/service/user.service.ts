import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<User>{
    //return this.http.get<User>('/api/user/'+id);
    return this.http.get<User>(`/api/user/${id}`);
  }
}
