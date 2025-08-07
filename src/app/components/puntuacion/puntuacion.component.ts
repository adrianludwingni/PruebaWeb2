import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-puntuacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './puntuacion.component.html',
  styleUrls: ['./puntuacion.component.css']
})
export class PuntuacionComponent {
  // Datos de reseñas (puedes reemplazarlos con los tuyos)
  rese = [
    {
      id: 1,
      nombre: "Carlos Pérez",
      comentario: "¡Excelente servicio! El Mustang GT superó mis expectativas.",
      foto: "https://randomuser.me/api/portraits/men/32.jpg",
      fecha: "15/05/2023"
    },
    {
      id: 2,
      nombre: "Ana Gómez",
      comentario: "Mi Civic Type R es perfecto. La entrega fue rápida.",
      foto: "https://randomuser.me/api/portraits/women/44.jpg",
      fecha: "22/06/2023"
    },
    {
      id: 3,
      nombre: "Luis Martínez",
      comentario: "El Camaro SS suena increíble. 100% recomendado.",
      foto: "https://randomuser.me/api/portraits/men/75.jpg",
      fecha: "10/07/2023"
    }
  ];


}
