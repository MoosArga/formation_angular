import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formation } from '../model/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationsDaoService {



  constructor(private httpClient: HttpClient) { }

  getFormations(): Observable<Formation[]> {
    return this.httpClient.get<Formation[]>('/api/formations');
  }

  getFormationsByName(nom: string) :Observable<Formation> {
    let httpParams :HttpParams = new HttpParams();
    httpParams = httpParams.append("nom",nom)
    return this.httpClient.get<Formation>('/api/formations', {params: httpParams});
  }

  scearchFormationsByName(nom: string) :Observable<Formation[]> {
    let httpParams :HttpParams = new HttpParams();
    httpParams = httpParams.append("nom_like",nom)
    return this.httpClient.get<Formation[]>('/api/formations', {params: httpParams});
  }
}
