import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asignatura } from '../models/asignatura.model';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8080/asignatura';

  getAsignaturas(): Observable<Asignatura[]> {
    return this.http.get<Asignatura[]>(this.baseUrl);
  }

  getAsignatura(id: number): Observable<Asignatura> {
    return this.http.get<Asignatura>(`${this.baseUrl}/${id}`);
  }
}
