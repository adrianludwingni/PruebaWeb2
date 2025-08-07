import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private apiUrl = 'http://localhost:3000/cursos'; 

  constructor(private http: HttpClient) {}

  crearCurso(curso: any): Observable<any> {
    
    const cursoConId = {
      ...curso,
      id: Math.floor(Math.random() * 65536).toString(16).padStart(4, '0')
    };
    return this.http.post(this.apiUrl, cursoConId);
  }

  obtenerCursos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}