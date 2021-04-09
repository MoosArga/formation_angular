import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CovidDaily } from '../model/covid-daily';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  findCovidDaily(min: number, max: number): Observable<HttpResponse<CovidDaily[]>> {
    const params: HttpParams = new HttpParams()
      .append('_start', min.toString())
      .append('_end', max.toString());
    return this.http.get<CovidDaily[]>('/api/covid', { params: params, observe: 'response' });
  }
}
