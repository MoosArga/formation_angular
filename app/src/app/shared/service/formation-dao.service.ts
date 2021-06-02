import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../model/formation';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormationDaoService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Formation[]> {
    return this.http.get<Formation[]>('/api/formations');
  }

  findByName(nom: string): Observable<Formation> {
    let httpParams: HttpParams = new HttpParams();
    httpParams = httpParams.append('nom', nom);
    return this.http.get<Formation[]>('/api/formations', { params: httpParams }).pipe(
      map(formations => !!formations && !!formations.length ? formations[0] : undefined)
    );
  }
}
