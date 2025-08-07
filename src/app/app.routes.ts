import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { ProductosComponent } from './pages/productos/productos.component';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';
import { CursosComponent } from './pages/cursos/cursos.component';
import { RegistroCursoComponent } from './pages/registro-curso/registro-curso.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'cursos', component: CursosComponent, canActivate: [AuthGuard] },
    { path: 'registro-curso', component: RegistroCursoComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: ErrorComponent } 
];



