import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SimpleUnit } from '../model/simple-unit';
import { map } from 'rxjs/operators';
import { Unit } from '../model/unit';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(private http: HttpClient) { }

  getAllUnits(): Observable<SimpleUnit[]> {
    return this.http.get('/api/v1/units').pipe(
      map(unitsWrapper => unitsWrapper['units'])
    )
  }

  getUnitByIdOrName(predicat: string): Observable<Unit> {
    return this.http.get<Unit>(`/api/v1/unit/${predicat}`);
  }
}
