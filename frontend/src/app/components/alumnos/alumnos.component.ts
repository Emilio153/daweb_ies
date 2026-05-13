import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno } from '../../models/alumno.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  constructor(private alumnoService: AlumnoService) {}
  alumnos: Alumno[] = [];

  ngOnInit(): void {
    this.alumnoService.getAlumnos().subscribe({
      next: (data) => this.alumnos = data,
      error: (err) => console.error('Error fetching alumnos', err)
    });
  }
}