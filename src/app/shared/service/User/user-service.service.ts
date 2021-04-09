import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  searchUserById(id: number): Observable<User> {
    let httpParams:HttpParams = new  HttpParams();
    if (id){
      httpParams = httpParams.append("id", id.toString());
    }
    return this.http.get<User>(`/api/user/${id}`);
  }
}
