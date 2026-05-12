import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatriculaService } from '../../services/matricula.service';
import { Matricula } from '../../models/matricula.model';

@Component({
  selector: 'app-matriculas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './matriculas.component.html',
  styleUrls: ['./matriculas.component.css']
})
export class MatriculasComponent implements OnInit {
  constructor(private matriculaService: MatriculaService) {}
  matriculas: Matricula[] = [];

  ngOnInit(): void {
    this.matriculaService.getMatriculas().subscribe({
      next: (data) => this.matriculas = data,
      error: (err) => console.error('Error fetching matriculas', err)
    });
  }
}
