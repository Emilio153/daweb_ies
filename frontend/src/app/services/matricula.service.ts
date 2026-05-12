import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Matricula } from '../models/matricula.model';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8080/matricula';

  getMatriculas(): Observable<Matricula[]> {
    return this.http.get<Matricula[]>(this.baseUrl);
  }

  getMatricula(id: number): Observable<Matricula> {
    return this.http.get<Matricula>(`${this.baseUrl}/${id}`);
  }
}
