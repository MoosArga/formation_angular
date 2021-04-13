import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Command } from '../model/command';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(private http: HttpClient) { }

  getCommands(): Observable<Command[]> {
    return this.http.get<Command[]>('/api/commandes');
  }

  createCommand(command: Command): Observable<Command> {
    command.id = Math.random().toString().substring(2, 10);
    command.nb = parseInt(command.nb.toString());
    return this.http.post<Command>('/api/commandes', command);
  }

}
