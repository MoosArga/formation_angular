import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../model/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationDaoService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Formation[]> {
    return this.http.get<Formation[]>('/api/formations');
  }
}
