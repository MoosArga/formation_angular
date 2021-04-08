import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../model/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationDaoService {

  constructor(private http: HttpClient) { }

  searchFormations(): Observable<Formation[]> {
    return this.http.get<Formation[]>('/api/formations');
  }

  searchFormationByName(nom: string): Observable<Formation> {
    let httpParams: HttpParams = new HttpParams();
    httpParams = httpParams.append('nom', nom);
    return this.http.get<Formation>('/api/formations', { params: httpParams });
    // Avec Path Param : return this.http.get<Formation>(`/api/formations/${nom}/details`);
  }

  searchFormationNomLike(nom: string): Observable<Formation[]> {
    let httpParams: HttpParams = new HttpParams();
    if (nom) {
      httpParams = httpParams.append('nom_like', nom);
    }
    return this.http.get<Formation[]>('/api/formations', { params: httpParams });
  }

}
