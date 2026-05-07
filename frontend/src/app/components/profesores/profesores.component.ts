import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfesorService } from '../../services/profesor.service';
import { Profesor } from '../../models/profesor.model';

@Component({
  selector: 'app-profesores',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="animate-fade-in">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
        <h2>Gestión de Profesores</h2>
        <button class="btn btn-primary">
          <span class="material-icons-round">add</span> Nuevo Profesor
        </button>
      </div>

      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Especialidad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let prof of profesores">
              <td>#{{ prof.id }}</td>
              <td style="font-weight: 500;">{{ prof.nombre }}</td>
              <td>{{ prof.apellidos }}</td>
              <td><span class="badge badge-success">{{ prof.especialidad }}</span></td>
              <td>
                <button class="btn btn-secondary" style="padding: 0.3rem 0.6rem; font-size: 0.8rem;">
                  Editar
                </button>
              </td>
            </tr>
            <tr *ngIf="profesores.length === 0">
              <td colspan="5" style="text-align: center; padding: 2rem;">No hay profesores registrados.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class ProfesoresComponent implements OnInit {
  profesorService = inject(ProfesorService);
  profesores: Profesor[] = [];

  ngOnInit(): void {
    this.profesorService.getProfesores().subscribe({
      next: (data) => this.profesores = data,
      error: (err) => console.error('Error fetching profesores', err)
    });
  }
}
