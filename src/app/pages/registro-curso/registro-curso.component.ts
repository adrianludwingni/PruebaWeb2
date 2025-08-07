import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CursoService } from '../../services/cursos.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro-curso',
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './registro-curso.component.html',
  styleUrls: ['./registro-curso.component.css']
})
export class RegistroCursoComponent {
  formCurso: FormGroup;
  cargando = false;
  errorRegistro = false;
  mensajeError = '';

  constructor(
    private fb: FormBuilder,
    private cursoService: CursoService, 
    private router: Router
  ) {
    this.formCurso = this.fb.group({
      nombreCurso: ['', Validators.required],
      descripcion: ['', Validators.required],
      nombreProfesor: ['', Validators.required],
      numeroEstudiantes: [0, [Validators.required, Validators.min(0)]],
      materiaCurso: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.formCurso.invalid) return;

    this.cargando = true;
    this.errorRegistro = false;
    this.mensajeError = '';

    this.cursoService.crearCurso(this.formCurso.value).subscribe({
      next: () => {
        this.cargando = false;
        this.router.navigate(['/cursos']);
      },
      error: (error) => {
        this.cargando = false;
        this.errorRegistro = true;
        this.mensajeError = error.message || 'Error al registrar el curso';
        console.error('Error:', error);
      }
    });
  }
}