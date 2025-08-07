import { Component } from '@angular/core';
import { CarruselComponent } from "../../components/carrusel/carrusel.component";
import { CategoriaComponent } from "../../components/categoria/categoria.component";
import { DestacadoComponent } from "../../components/destacado/destacado.component";
import { PromocionComponent } from "../../components/promocion/promocion.component";
import { PuntuacionComponent } from "../../components/puntuacion/puntuacion.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarruselComponent, CategoriaComponent, DestacadoComponent,  PuntuacionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
