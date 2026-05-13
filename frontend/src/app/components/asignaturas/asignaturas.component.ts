import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AsignaturaService } from '../../services/asignatura.service';
import { Asignatura } from '../../models/asignatura.model';

@Component({
  selector: 'app-asignaturas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {
  constructor(private asignaturaService: AsignaturaService) {}
  asignaturas: Asignatura[] = [];

  ngOnInit(): void {
    this.asignaturaService.getAsignaturas().subscribe({
      next: (data) => this.asignaturas = data,
      error: (err) => console.error('Error fetching asignaturas', err)
    });
  }
}
