import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Color } from '../model/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private http: HttpClient) { }

  getColors(): Observable<Color[]> {
    return this.http.get<Color[]>('/assets/colors.json');
  }
}
