import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos: any[] = [];
  cargando = true;

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.cargarCursos();
  }

  cargarCursos(): void {
    this.cursoService.obtenerCursos().subscribe({
      next: (cursos) => {
        this.cursos = cursos;
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al cargar cursos:', error);
        this.cargando = false;
      }
    });
  }
}
