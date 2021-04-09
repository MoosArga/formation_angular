import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../model/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationDaoService {

  constructor(private http: HttpClient) { }

  search(): Observable<Formation[]>{
    return this.http.get<Formation[]>('/api/formations');
  }

  searchByNom(nom: string): Observable<Formation>{
    let param: HttpParams = new HttpParams();
    if (nom){
      param = param.append('nom',nom);
    }

    return this.http.get<Formation>('/api/formations', {params: param})
  }

  searchByText(text: string): Observable<Formation[]>{
    if(text){
      let param: HttpParams = new HttpParams();
      param = param.append('nom_like',text);


      return this.http.get<Formation[]>('/api/formations', {params: param})
    }
    else{
      return this.http.get<Formation[]>('/api/formations');
    }
  }

}
