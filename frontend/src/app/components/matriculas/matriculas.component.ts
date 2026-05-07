import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatriculaService } from '../../services/matricula.service';
import { Matricula } from '../../models/matricula.model';

@Component({
  selector: 'app-matriculas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="animate-fade-in">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
        <h2>Gestión de Matrículas</h2>
        <button class="btn btn-primary">
          <span class="material-icons-round">add</span> Nueva Matrícula
        </button>
      </div>

      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Alumno</th>
              <th>Asignatura</th>
              <th>Curso</th>
              <th>Nota Media</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let mat of matriculas">
              <td>#{{ mat.id }}</td>
              <td style="font-weight: 500;">
                <span *ngIf="mat.alumno">{{ mat.alumno.nombre }} {{ mat.alumno.apellidos }}</span>
                <span *ngIf="!mat.alumno" class="text-muted">Desconocido</span>
              </td>
              <td>
                <span *ngIf="mat.asignatura">{{ mat.asignatura.nombre }}</span>
                <span *ngIf="!mat.asignatura" class="text-muted">Desconocida</span>
              </td>
              <td>{{ mat.curso }}</td>
              <td><strong>{{ mat.notaMedia }}</strong></td>
              <td>
                <span class="badge" [ngClass]="mat.notaMedia >= 5 ? 'badge-success' : 'badge-primary'">
                  {{ mat.notaMedia >= 5 ? 'Aprobado' : 'Suspenso' }}
                </span>
              </td>
            </tr>
            <tr *ngIf="matriculas.length === 0">
              <td colspan="6" style="text-align: center; padding: 2rem;">No hay matrículas registradas.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `
})
export class MatriculasComponent implements OnInit {
  matriculaService = inject(MatriculaService);
  matriculas: Matricula[] = [];

  ngOnInit(): void {
    this.matriculaService.getMatriculas().subscribe({
      next: (data) => this.matriculas = data,
      error: (err) => console.error('Error fetching matriculas', err)
    });
  }
}
