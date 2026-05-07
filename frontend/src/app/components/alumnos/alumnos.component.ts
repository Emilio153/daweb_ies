import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno } from '../../models/alumno.model';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="animate-fade-in">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
        <h2>Gestión de Alumnos</h2>
        <button class="btn btn-primary">
          <span class="material-icons-round">add</span> Nuevo Alumno
        </button>
      </div>

      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>iPasen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let alumno of alumnos">
              <td>#{{ alumno.id }}</td>
              <td style="font-weight: 500;">{{ alumno.nombre }}</td>
              <td>{{ alumno.apellidos }}</td>
              <td><span class="badge badge-primary">{{ alumno.ipasen }}</span></td>
              <td>
                <button class="btn btn-secondary" style="padding: 0.3rem 0.6rem; font-size: 0.8rem;">
                  Editar
                </button>
              </td>
            </tr>
            <tr *ngIf="alumnos.length === 0">
              <td colspan="5" style="text-align: center; padding: 2rem;">No hay alumnos registrados.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class AlumnosComponent implements OnInit {
  alumnoService = inject(AlumnoService);
  alumnos: Alumno[] = [];

  ngOnInit(): void {
    this.alumnoService.getAlumnos().subscribe({
      next: (data) => this.alumnos = data,
      error: (err) => console.error('Error fetching alumnos', err)
    });
  }
}
