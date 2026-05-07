import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { MatriculasComponent } from './components/matriculas/matriculas.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'profesores', component: ProfesoresComponent },
  { path: 'asignaturas', component: AsignaturasComponent },
  { path: 'matriculas', component: MatriculasComponent },
  { path: '**', redirectTo: '' }
];
