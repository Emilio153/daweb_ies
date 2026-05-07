import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="animate-fade-in">
      <div class="hero-section">
        <h1 class="hero-title">Instituto Alcores Management</h1>
        <p class="hero-subtitle">Gestión integral de alumnos, profesores y asignaturas con una interfaz premium.</p>
      </div>

      <div class="grid grid-cols-2">
        <div class="card stat-card" routerLink="/alumnos">
          <div class="icon-container">
            <span class="material-icons-round text-primary">groups</span>
          </div>
          <div>
            <h3>Alumnos</h3>
            <p class="text-muted">Gestionar matriculaciones e información</p>
          </div>
        </div>

        <div class="card stat-card" routerLink="/profesores">
          <div class="icon-container">
            <span class="material-icons-round text-secondary">person</span>
          </div>
          <div>
            <h3>Profesores</h3>
            <p class="text-muted">Plantilla docente y asignaciones</p>
          </div>
        </div>

        <div class="card stat-card" routerLink="/asignaturas">
          <div class="icon-container">
            <span class="material-icons-round text-accent">menu_book</span>
          </div>
          <div>
            <h3>Asignaturas</h3>
            <p class="text-muted">Materias impartidas en el centro</p>
          </div>
        </div>

        <div class="card stat-card" routerLink="/matriculas">
          <div class="icon-container">
            <span class="material-icons-round text-danger">assignment</span>
          </div>
          <div>
            <h3>Matrículas</h3>
            <p class="text-muted">Expedientes académicos y notas</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .hero-section {
      text-align: center;
      padding: 4rem 2rem;
      margin-bottom: 2rem;
      background: var(--bg-glass);
      backdrop-filter: blur(10px);
      border-radius: var(--radius-lg);
      border: 1px solid var(--border-light);
      box-shadow: var(--shadow-sm);
    }
    
    .hero-title {
      font-size: 2.5rem;
      background: linear-gradient(to right, var(--primary), var(--secondary));
      -webkit-background-clip: text;
      color: transparent;
      margin-bottom: 1rem;
    }

    .hero-subtitle {
      font-size: 1.1rem;
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto;
    }

    .stat-card {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .stat-card:hover {
      transform: translateY(-5px);
      border-color: var(--primary-light);
    }

    .icon-container {
      width: 60px;
      height: 60px;
      border-radius: var(--radius-full);
      background: #f3f4f6;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon-container span {
      font-size: 30px;
    }

    .text-primary { color: var(--primary); }
    .text-secondary { color: var(--secondary); }
    .text-accent { color: var(--accent); }
    .text-danger { color: var(--danger); }
  `]
})
export class DashboardComponent {}
