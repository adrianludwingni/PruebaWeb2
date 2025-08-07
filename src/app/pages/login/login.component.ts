import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [ReactiveFormsModule, CommonModule], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin: FormGroup;
  cargando = false;
  errorLogin = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.formLogin.invalid) return;

    this.cargando = true;
    this.errorLogin = false;

    const { email, password } = this.formLogin.value;

    this.authService.login(email, password).subscribe({
      next: (users) => {
        this.cargando = false;
        if (!users || users.length === 0) {
          this.errorLogin = true;
        } else {
          this.router.navigate(['/productos']);
        }
      },
      error: () => {
        this.cargando = false;
        this.errorLogin = true;
      }
    });
  }
}
