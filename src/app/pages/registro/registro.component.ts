import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  formRegistro: FormGroup;
  cargando = false;
  errorRegistro = false;
  mensajeError = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.formRegistro = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.formRegistro.invalid) return;

    this.cargando = true;
    this.errorRegistro = false;
    this.mensajeError = '';

    const { email, password } = this.formRegistro.value;

    this.authService.register({ email, password }).subscribe({
      next: () => {
        this.cargando = false;
        this.router.navigate(['/login']); 
      },
      error: (error) => {
        this.cargando = false;
        this.errorRegistro = true;
        this.mensajeError = error.message || 'Error en el registro. Intenta nuevamente.';
        console.error('Error en registro:', error);
      }
    });
  }
}