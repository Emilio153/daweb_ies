import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfesorService } from '../../services/profesor.service';
import { Profesor } from '../../models/profesor.model';

@Component({
  selector: 'app-profesores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {
  constructor(private profesorService: ProfesorService) {}
  profesores: Profesor[] = [];

  ngOnInit(): void {
    this.profesorService.getProfesores().subscribe({
      next: (data) => this.profesores = data,
      error: (err) => console.error('Error fetching profesores', err)
    });
  }
}