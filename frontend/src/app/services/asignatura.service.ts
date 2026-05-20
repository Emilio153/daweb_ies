import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asignatura } from '../models/asignatura.model';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {
  private http = inject(HttpClient);
  private baseUrl = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
    ? 'http://localhost:8082/asignatura'
    : 'https://daweb-ies-arz8.onrender.com/asignatura';

  getAsignaturas(): Observable<Asignatura[]> {
    return this.http.get<Asignatura[]>(this.baseUrl);
  }

  getAsignatura(id: number): Observable<Asignatura> {
    return this.http.get<Asignatura>(`${this.baseUrl}/${id}`);
  }
}
