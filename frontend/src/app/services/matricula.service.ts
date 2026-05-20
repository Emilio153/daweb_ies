import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Matricula } from '../models/matricula.model';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {
  private http = inject(HttpClient);
  private baseUrl = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ? 'http://localhost:8082/matricula'
    : 'https://daweb-ies-arz8.onrender.com/matricula';

  getMatriculas(): Observable<Matricula[]> {
    return this.http.get<Matricula[]>(this.baseUrl);
  }

  getMatricula(id: number): Observable<Matricula> {
    return this.http.get<Matricula>(`${this.baseUrl}/${id}`);
  }
}
