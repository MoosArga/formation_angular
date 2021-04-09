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
    return this.http.get<Formation[]>("/api/formations");
  }

  searchFormationByName(name:string): Observable<Formation> {
    //return this.http.get<Formation>("/api/formations?nom=" + name);
    //return this.http.get<Formation>(`/api/formations?nom=${name}`);
    let httpParams:HttpParams = new  HttpParams();
    if (name){
      httpParams = httpParams.append("nom", name);
    }
    return this.http.get<Formation>("/api/formations", { params : httpParams });
  }

  searchFormationsByFilter(name:string): Observable<Formation[]> {
    let httpParams:HttpParams = new  HttpParams();
    if (name) {
      httpParams = httpParams.append("nom_like", name);
    }
    return this.http.get<Formation[]>("/api/formations", { params : httpParams });
  }

}
