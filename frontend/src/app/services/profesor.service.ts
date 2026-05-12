import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profesor } from '../models/profesor.model';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8080/profesor';

  getProfesores(): Observable<Profesor[]> {
    return this.http.get<Profesor[]>(this.baseUrl);
  }

  getProfesor(id: number): Observable<Profesor> {
    return this.http.get<Profesor>(`${this.baseUrl}/${id}`);
  }
}
