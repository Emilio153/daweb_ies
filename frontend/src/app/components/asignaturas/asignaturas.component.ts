import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AsignaturaService } from '../../services/asignatura.service';
import { Asignatura } from '../../models/asignatura.model';

@Component({
  selector: 'app-asignaturas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="animate-fade-in">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
        <h2>Gestión de Asignaturas</h2>
        <button class="btn btn-primary">
          <span class="material-icons-round">add</span> Nueva Asignatura
        </button>
      </div>

      <div class="grid grid-cols-3">
        <div class="card" *ngFor="let asig of asignaturas" style="display: flex; flex-direction: column; gap: 1rem;">
          <div>
            <h3 style="color: var(--primary);">{{ asig.nombre }}</h3>
            <p class="text-muted" style="font-size: 0.9rem;">ID: #{{ asig.id }}</p>
          </div>
          
          <div style="flex-grow: 1;">
            <p><strong>Horas:</strong> {{ asig.horas }}h</p>
            <p *ngIf="asig.profesor"><strong>Profesor:</strong> {{ asig.profesor.nombre }} {{ asig.profesor.apellidos }}</p>
            <p *ngIf="!asig.profesor" class="text-muted" style="font-style: italic;">Sin profesor asignado</p>
          </div>
          
          <button class="btn btn-secondary" style="width: 100%;">Editar Asignatura</button>
        </div>
      </div>
      
      <div *ngIf="asignaturas.length === 0" style="text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-lg);">
        <p>No hay asignaturas registradas.</p>
      </div>
    </div>
  `
})
export class AsignaturasComponent implements OnInit {
  asignaturaService = inject(AsignaturaService);
  asignaturas: Asignatura[] = [];

  ngOnInit(): void {
    this.asignaturaService.getAsignaturas().subscribe({
      next: (data) => this.asignaturas = data,
      error: (err) => console.error('Error fetching asignaturas', err)
    });
  }
}
