import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Civilization } from '../model/civilization';
import { SimpleCivilization } from '../model/simple-civilization';

@Injectable({
  providedIn: 'root'
})
export class CivilizationService {

  constructor(private http: HttpClient) { }

  getAllCivilizations(): Observable<SimpleCivilization[]> {
    return this.http.get('/api/v1/civilizations').pipe(
      map(civilizationsWrapper => civilizationsWrapper['civilizations'])
    )
  }

  getCivilizationById(id: number): Observable<Civilization> {
    return this.http.get<Civilization>(`/api/v1/civilization/${id}`).pipe(map(c => new Civilization(c)));
  }
}
