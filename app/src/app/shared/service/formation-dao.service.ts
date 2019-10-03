import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Formation } from '../model/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationDaoService {

  constructor(private http: HttpClient) { }

  getFormations(): Observable<Formation[]> {
    return this.http.get<Formation[]>('/api/formations');
  }

  getFormationByName(name: string): Observable<Formation> {
    let httpParams: HttpParams = new HttpParams();
    httpParams = httpParams.set('nom', name);
    return this.http.get<Formation>('/api/formations', { params: httpParams }).pipe(
      map(m => m[0])
      );
  }

}
